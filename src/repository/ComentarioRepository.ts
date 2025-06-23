//// filepath: src/repository/comentario.repository.ts
import { PrismaClient, Comentario } from '@prisma/client';

const prisma = new PrismaClient();

export class ComentarioRepository {
  async criar(dados: { conteudo: string; postId: number; usuarioId: number }): Promise<Comentario> {
    return await prisma.comentario.create({ data: dados });
  }

  async buscarPorId(id: number): Promise<Comentario | null> {
    return await prisma.comentario.findUnique({
      where: { id },
      include: {
        usuario: true,
        post: true,
        curtidas: true,
      },
    });
  }

  async atualizar(id: number, dados: Partial<{ conteudo: string }>): Promise<Comentario> {
    return await prisma.comentario.update({
      where: { id },
      data: dados,
    });
  }

  async remover(id: number): Promise<Comentario> {
    return await prisma.comentario.delete({ where: { id } });
  }

  async listarTodos(): Promise<Comentario[]> {
    return await prisma.comentario.findMany({
      include: {
        usuario: true,
        post: true,
        curtidas: true,
      },
    });
  }

  async listarPorPost(postId: number): Promise<Comentario[]> {
    return await prisma.comentario.findMany({
      where: { postId },
      include: {
        usuario: true,
        curtidas: true,
      },
      orderBy: {
        criadoEm: 'desc',
      },
    });
  }
}