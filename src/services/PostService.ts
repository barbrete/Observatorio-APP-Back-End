//// filepath: src/services/post.service.ts
import { PostRepository } from '../repository/post.repository';

export class PostService {
  private postRepository = new PostRepository();

  async criarPost(dados: { conteudo: string; usuarioId: number }) {
    return await this.postRepository.criar(dados);
  }

  async obterPostPorId(id: number) {
    const post = await this.postRepository.buscarPorId(id);
    if (!post) throw new Error('Post não encontrado');
    return post;
  }

  async atualizarPost(id: number, dados: Partial<{ conteudo: string }>) {
    return await this.postRepository.atualizar(id, dados);
  }

  async removerPost(id: number) {
    return await this.postRepository.remover(id);
  }

  async listarPosts() {
    return await this.postRepository.listarTodos();
  }
}