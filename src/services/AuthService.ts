import prisma from '../../prisma/PrismaClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET || "";

export const autenticarUsuario = async (email: string, senha: string) => {
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return null;
  console.log('Usuário retornado:', usuario);
  const senhaValida = await bcrypt.compare(senha, usuario.password);
  if (!senhaValida) return null;

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, tipo: usuario.tipo_usuario },
    SECRET,
    { expiresIn: '1h' }
  );

  const { password, ...usuarioSemSenha } = usuario;

  return { usuario: usuarioSemSenha, token };
};