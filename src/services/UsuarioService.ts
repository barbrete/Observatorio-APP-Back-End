//// filepath: src/services/usuario.service.ts
import bcrypt from 'bcryptjs';
import { UsuarioRepository } from '../repository/usuario.repository';

export class UsuarioService {
  private usuarioRepository = new UsuarioRepository();

  async registrar(dados: { nome: string; email: string; senha: string }) {
    const usuarioExistente = await this.usuarioRepository.buscarPorEmail(dados.email);
    if (usuarioExistente) {
      throw new Error('Email já cadastrado');
    }
    const senhaCriptografada = await bcrypt.hash(dados.senha, 10);
    return await this.usuarioRepository.criar({ ...dados, senha: senhaCriptografada });
  }

  async obterPorId(id: number) {
    const usuario = await this.usuarioRepository.buscarPorId(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    return usuario;
  }

  async atualizarUsuario(id: number, dados: Partial<{ nome: string; email: string; senha: string }>) {
    if (dados.senha) {
      dados.senha = await bcrypt.hash(dados.senha, 10);
    }
    return await this.usuarioRepository.atualizar(id, dados);
  }

  async removerUsuario(id: number) {
    return await this.usuarioRepository.remover(id);
  }

  async listarUsuarios() {
    return await this.usuarioRepository.listarTodos();
  }
}