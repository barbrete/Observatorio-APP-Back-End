import { Router } from 'express';
import { criar, listar, buscarPorId, atualizar, remover } from '../controllers/PostController';

const router = Router();

router.post('/', criar);
router.get('/', listar);
router.get('/:id', buscarPorId);
router.put('/:id', atualizar);
router.delete('/:id', remover);

export default router;