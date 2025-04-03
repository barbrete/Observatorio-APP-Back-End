const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();

const PORT = 5000;
const JWT_SECRET = process.env.API_KEY

// Middleware
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: 'admwindows', // Substitua pela sua senha do MySQL
    database: 'IFTMDb'
});

db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

//para mostrar que está funcionando
app.get('/', (req, res) => {
  res.send('Servidos está funcionando!');
})

// Rota de registro
app.post('/api/register', async (req, res) => {
    const { nome, email, senha } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(senha, 10);
  
      const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
      db.query(query, [nome, email, hashedPassword], (err, result) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ success: false, message: 'Email já cadastrado.' });
          }
          return res.status(500).json({ success: false, message: 'Erro ao registrar usuário.', error: err });
        }
        res.json({ success: true, message: 'Usuário registrado com sucesso!' });
      });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Erro ao processar a solicitação.', error: err.message });
    }
  });

// Rota de login
app.post('/api/login', async (req, res) => {
  alert('Requisição recebida:', req.body);
  const { email, senha } = req.body;

  try {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Erro ao buscar usuário.', error: err });
      }

      if (results.length === 0) {
        return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
      }

      const user = results[0];
      const isPasswordValid = await bcrypt.compare(senha, user.senha);

      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Senha incorreta' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ success: true, token });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Erro ao fazer login', error: err.message });
  }
});

// Rota protegida (exemplo)
app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ success: false, message: 'Token não fornecido' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      res.json({ success: true, message: 'Acesso autorizado', user: decoded });
    } catch (err) {
      res.status(401).json({ success: false, message: 'Token inválido ou expirado' });
    }
  });

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});