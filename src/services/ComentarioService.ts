import * as comentarioRepository from '../repository/ComentarioRepository';

export const criarComentario = async (dados: { conteudo: string; postId: number; usuarioId: number }) => {
  return await comentarioRepository.criar(dados);
};

export const obterComentarioPorId = async (id: number) => {
  const comentario = await comentarioRepository.buscarPorId(id);
  if (!comentario) throw new Error('Comentário não encontrado');
  return comentario;
};

export const atualizarComentario = async (
  id: number,
  dados: Partial<{ conteudo: string }>
) => {
  return await comentarioRepository.atualizar(id, dados);
};

export const removerComentario = async (id: number) => {
  return await comentarioRepository.remover(id);
};

export const listarComentarios = async () => {
  return await comentarioRepository.listarTodos();
};

export const listarComentariosPorPost = async (postId: number) => {
  return await comentarioRepository.listarPorPost(postId);
};