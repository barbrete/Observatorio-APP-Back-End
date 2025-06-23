//// filepath: src/routes/comentario.routes.ts
import { Router } from 'express';
import { ComentarioController } from '../controllers/comentario.controller';

const router = Router();
const comentarioController = new ComentarioController();

router.post('/', comentarioController.criar.bind(comentarioController));
router.get('/', comentarioController.listar.bind(comentarioController));
router.get('/:id', comentarioController.buscarPorId.bind(comentarioController));
router.get('/post/:postId', comentarioController.listarPorPost.bind(comentarioController));
router.put('/:id', comentarioController.atualizar.bind(comentarioController));
router.delete('/:id', comentarioController.remover.bind(comentarioController));

export default router;