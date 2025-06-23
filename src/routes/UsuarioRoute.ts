import { Router } from 'express';
import { registrar, listar, buscarPorId, atualizar, remover } from '../controllers/UsuarioController';

const router = Router();

router.post('/', registrar);
router.get('/', listar);
router.get('/:id', buscarPorId);
router.put('/:id', atualizar);
router.delete('/:id', remover);

export default router;