import prisma from '../../prisma/prismaClient';
import { Post } from '../../generated/prisma';

export const criar = async (dados: { conteudo: string; usuarioId: number }): Promise<Post> => {
  return await prisma.post.create({ data: dados });
};

export const buscarPorId = async (id: number): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      usuario: true,
      comentarios: true,
      curtidas: true
    }
  });
};

export const atualizar = async (
  id: number,
  dados: Partial<{ conteudo: string }>
): Promise<Post> => {
  return await prisma.post.update({ where: { id }, data: dados });
};

export const remover = async (id: number): Promise<Post> => {
  return await prisma.post.delete({ where: { id } });
};

export const listarTodos = async (): Promise<Post[]> => {
  return await prisma.post.findMany({
    include: {
      usuario: true,
      comentarios: true,
      curtidas: true
    }
  });
};