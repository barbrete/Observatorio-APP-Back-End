//// filepath: src/controllers/comentario.controller.ts
import { Request, Response } from 'express';
import { ComentarioService } from '../services/comentario.service';

const comentarioService = new ComentarioService();

export class ComentarioController {
  async criar(req: Request, res: Response) {
    try {
      const { conteudo, postId, usuarioId } = req.body;
      const comentario = await comentarioService.criarComentario({ conteudo, postId, usuarioId });
      res.status(201).json({ sucesso: true, comentario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const comentario = await comentarioService.obterComentarioPorId(id);
      res.status(200).json({ sucesso: true, comentario });
    } catch (error: any) {
      res.status(404).json({ sucesso: false, mensagem: error.message });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const comentario = await comentarioService.atualizarComentario(id, req.body);
      res.json({ sucesso: true, comentario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async remover(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const comentario = await comentarioService.removerComentario(id);
      res.json({ sucesso: true, comentario });
    } catch (error: any) {
      res.status(400).json({ sucesso: false, mensagem: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const comentarios = await comentarioService.listarComentarios();
      res.json({ sucesso: true, comentarios });
    } catch (error: any) {
      res.status(500).json({ sucesso: false, mensagem: error.message });
    }
  }

  async listarPorPost(req: Request, res: Response) {
    try {
      const postId = parseInt(req.params.postId);
      const comentarios = await comentarioService.listarComentariosPorPost(postId);
      res.json({ sucesso: true, comentarios });
    } catch (error: any) {
      res.status(500).json({ sucesso: false, mensagem: error.message });
    }
  }
}