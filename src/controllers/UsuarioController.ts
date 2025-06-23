import { Request, Response } from 'express';
import * as usuarioService from '../services/UsuarioService';

export const registrar = async (req: Request, res: Response) => {
  try {
    const { nome, email, senha } = req.body;
    const usuario = await usuarioService.registrar({ nome, email, senha });
    res.status(201).json({ sucesso: true, usuario });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const buscarPorId = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await usuarioService.obterPorId(id);
    res.status(200).json({ sucesso: true, usuario });
  } catch (error: any) {
    res.status(404).json({ sucesso: false, mensagem: error.message });
  }
};

export const atualizar = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await usuarioService.atualizarUsuario(id, req.body);
    res.json({ sucesso: true, usuario });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const remover = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await usuarioService.removerUsuario(id);
    res.json({ sucesso: true, usuario });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const listar = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.json({ sucesso: true, usuarios });
  } catch (error: any) {
    res.status(500).json({ sucesso: false, mensagem: error.message });
  }
};