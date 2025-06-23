import * as postRepository from '../repository/PostRepository';

export const criarPost = async (dados: { conteudo: string; usuarioId: number }) => {
  return await postRepository.criar(dados);
};

export const obterPostPorId = async (id: number) => {
  const post = await postRepository.buscarPorId(id);
  if (!post) throw new Error('Post não encontrado');
  return post;
};

export const atualizarPost = async (
  id: number,
  dados: Partial<{ conteudo: string }>
) => {
  return await postRepository.atualizar(id, dados);
};

export const removerPost = async (id: number) => {
  return await postRepository.remover(id);
};

export const listarPosts = async () => {
  return await postRepository.listarTodos();
};