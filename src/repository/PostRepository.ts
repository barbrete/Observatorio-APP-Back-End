//// filepath: src/repository/post.repository.ts
import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

export class PostRepository {
  async criar(dados: { conteudo: string; usuarioId: number }): Promise<Post> {
    return await prisma.post.create({ data: dados });
  }

  async buscarPorId(id: number): Promise<Post | null> {
    return await prisma.post.findUnique({
      where: { id },
      include: {
        usuario: true,
        comentarios: true,
        curtidas: true
      }
    });
  }

  async atualizar(id: number, dados: Partial<{ conteudo: string }>): Promise<Post> {
    return await prisma.post.update({ where: { id }, data: dados });
  }

  async remover(id: number): Promise<Post> {
    return await prisma.post.delete({ where: { id } });
  }

  async listarTodos(): Promise<Post[]> {
    return await prisma.post.findMany({
      include: {
        usuario: true,
        comentarios: true,
        curtidas: true
      }
    });
  }
}