import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

export class UsuarioRepository {
  async criar(dados: { nome: string; email: string; senha: string }): Promise<Usuario> {
    return await prisma.usuario.create({ data: dados });
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    return await prisma.usuario.findUnique({ where: { id } });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return await prisma.usuario.findUnique({ where: { email } });
  }

  async atualizar(id: number, dados: Partial<{ nome: string; email: string; senha: string }>): Promise<Usuario> {
    return await prisma.usuario.update({ where: { id }, data: dados });
  }

  async remover(id: number): Promise<Usuario> {
    return await prisma.usuario.delete({ where: { id } });
  }

  async listarTodos(): Promise<Usuario[]> {
    return await prisma.usuario.findMany();
  }
}