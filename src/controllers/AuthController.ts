import { Request, Response } from 'express';
import * as AuthService from '../services/AuthService';
import bcrypt from 'bcryptjs';
import * as usuarioService from '../services/UsuarioService';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await AuthService.autenticarUsuario(email, password);
  if (!result) {
    res.status(401).json({ mensagem: 'Email ou senha inválidos' });
    return;
  }
  res.json(result);
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const novoUsuario = {
      ...req.body,
      password: passwordHash,
    };
    const usuario = await usuarioService.registrar(novoUsuario);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: "Erro ao registrar usuário", details: err });
  }
};