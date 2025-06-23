//// filepath: src/controllers/usuario.controller.ts
import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

const usuarioService = new UsuarioService();

export class UsuarioController {
  async registrar(req: Request, res: Response) {
    try {
      const { nome, email, senha } = req.body;
      const usuario = await usuarioService.registrar({ nome, email, senha });
      res.status(201).json({ sucesso: true, usuario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const usuario = await usuarioService.obterPorId(id);
      res.status(200).json({ sucesso: true, usuario });
    } catch (error: any) {
      res.status(404).json({ sucesso: false, mensagem: error.message });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const usuario = await usuarioService.atualizarUsuario(id, req.body);
      res.json({ sucesso: true, usuario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async remover(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const usuario = await usuarioService.removerUsuario(id);
      res.json({ sucesso: true, usuario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const usuarios = await usuarioService.listarUsuarios();
      res.json({ sucesso: true, usuarios });
    } catch (error: any) {
      res.status(500).json({ sucesso: false, mensagem: error.message });
    }
  }
}