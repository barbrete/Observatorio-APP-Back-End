import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/', usuarioController.registrar.bind(usuarioController));
router.get('/', usuarioController.listar.bind(usuarioController));
router.get('/:id', usuarioController.buscarPorId.bind(usuarioController));
router.put('/:id', usuarioController.atualizar.bind(usuarioController));
router.delete('/:id', usuarioController.remover.bind(usuarioController));

export default router;