//// filepath: src/services/comentario.service.ts
import { ComentarioRepository } from '../repository/comentario.repository';

export class ComentarioService {
  private comentarioRepository = new ComentarioRepository();

  async criarComentario(dados: { conteudo: string; postId: number; usuarioId: number }) {
    return await this.comentarioRepository.criar(dados);
  }

  async obterComentarioPorId(id: number) {
    const comentario = await this.comentarioRepository.buscarPorId(id);
    if (!comentario) throw new Error('Comentário não encontrado');
    return comentario;
  }

  async atualizarComentario(id: number, dados: Partial<{ conteudo: string }>) {
    return await this.comentarioRepository.atualizar(id, dados);
  }

  async removerComentario(id: number) {
    return await this.comentarioRepository.remover(id);
  }

  async listarComentarios() {
    return await this.comentarioRepository.listarTodos();
  }

  async listarComentariosPorPost(postId: number) {
    return await this.comentarioRepository.listarPorPost(postId);
  }
}