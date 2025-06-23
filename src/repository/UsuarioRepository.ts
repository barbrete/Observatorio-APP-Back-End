import prisma from '../../prisma/prismaClient';
import { Usuario } from '../../generated/prisma';

export const criar = async (dados: { nome: string; email: string; senha: string }): Promise<Usuario> => {
  return await prisma.usuario.create({ data: dados });
};

export const buscarPorId = async (id: number): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const buscarPorEmail = async (email: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { email } });
};

export const atualizar = async (
  id: number,
  dados: Partial<{ nome: string; email: string; senha: string }>
): Promise<Usuario> => {
  return await prisma.usuario.update({ where: { id }, data: dados });
};

export const remover = async (id: number): Promise<Usuario> => {
  return await prisma.usuario.delete({ where: { id } });
};

export const listarTodos = async (): Promise<Usuario[]> => {
  return await prisma.usuario.findMany();
};