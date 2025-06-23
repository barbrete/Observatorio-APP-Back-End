import prisma from '../../prisma/prismaClient';
import { Comentario } from '../../generated/prisma';

export const criar = async (dados: { conteudo: string; postId: number; usuarioId: number }): Promise<Comentario> => {
  return await prisma.comentario.create({ data: dados });
};

export const buscarPorId = async (id: number): Promise<Comentario | null> => {
  return await prisma.comentario.findUnique({
    where: { id },
    include: {
      usuario: true,
      post: true,
      curtidas: true,
    },
  });
};

export const atualizar = async (
  id: number,
  dados: Partial<{ conteudo: string }>
): Promise<Comentario> => {
  return await prisma.comentario.update({
    where: { id },
    data: dados,
  });
};

export const remover = async (id: number): Promise<Comentario> => {
  return await prisma.comentario.delete({ where: { id } });
};

export const listarTodos = async (): Promise<Comentario[]> => {
  return await prisma.comentario.findMany({
    include: {
      usuario: true,
      post: true,
      curtidas: true,
    },
  });
};

export const listarPorPost = async (postId: number): Promise<Comentario[]> => {
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
};