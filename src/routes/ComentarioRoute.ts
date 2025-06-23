import { Router } from 'express';
import { criar, listar, buscarPorId, listarPorPost, atualizar, remover } from '../controllers/ComentarioController';

const router = Router();

router.post('/', criar);
router.get('/', listar);
router.get('/:id', buscarPorId);
router.get('/post/:postId', listarPorPost);
router.put('/:id', atualizar);
router.delete('/:id', remover);

export default router;