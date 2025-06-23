import { Request, Response } from 'express';
import * as postService from '../services/PostService';

export const criar = async (req: Request, res: Response) => {
  try {
    const { conteudo, usuarioId } = req.body;
    const post = await postService.criarPost({ conteudo, usuarioId });
    res.status(201).json({ sucesso: true, post });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const buscarPorId = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await postService.obterPostPorId(id);
    res.status(200).json({ sucesso: true, post });
  } catch (error: any) {
    res.status(404).json({ sucesso: false, mensagem: error.message });
  }
};

export const atualizar = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await postService.atualizarPost(id, req.body);
    res.json({ sucesso: true, post });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const remover = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await postService.removerPost(id);
    res.json({ sucesso: true, post });
  } catch (error: any) {
    res.status(400).json({ sucesso: false, mensagem: error.message });
  }
};

export const listar = async (req: Request, res: Response) => {
  try {
    const posts = await postService.listarPosts();
    res.json({ sucesso: true, posts });
  } catch (error: any) {
    res.status(500).json({ sucesso: false, mensagem: error.message });
  }
};