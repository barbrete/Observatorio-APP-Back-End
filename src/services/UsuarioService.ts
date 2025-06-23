import bcrypt from 'bcryptjs';
import * as usuarioRepository from '../repository/UsuarioRepository';

export const registrar = async (dados: { nome: string; email: string; senha: string }) => {
  const usuarioExistente = await usuarioRepository.buscarPorEmail(dados.email);
  if (usuarioExistente) {
    throw new Error('Email já cadastrado');
  }
  const senhaCriptografada = await bcrypt.hash(dados.senha, 10);
  return await usuarioRepository.criar({ ...dados, senha: senhaCriptografada });
};

export const obterPorId = async (id: number) => {
  const usuario = await usuarioRepository.buscarPorId(id);
  if (!usuario) throw new Error('Usuário não encontrado');
  return usuario;
};

export const atualizarUsuario = async (
  id: number,
  dados: Partial<{ nome: string; email: string; senha: string }>
) => {
  if (dados.senha) {
    dados.senha = await bcrypt.hash(dados.senha, 10);
  }
  return await usuarioRepository.atualizar(id, dados);
};

export const removerUsuario = async (id: number) => {
  return await usuarioRepository.remover(id);
};

export const listarUsuarios = async () => {
  return await usuarioRepository.listarTodos();
};