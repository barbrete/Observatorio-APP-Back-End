import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';
import postRoutes from './routes/post.routes';
import comentarioRoutes from './routes/comentario.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor está funcionando!');
});

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comentarios', comentarioRoutes);

export default app;