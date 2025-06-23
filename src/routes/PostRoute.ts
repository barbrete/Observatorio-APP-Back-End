//// filepath: src/routes/post.routes.ts
import { Router } from 'express';
import { PostController } from '../controllers/post.controller';

const router = Router();
const postController = new PostController();

router.post('/', postController.criar.bind(postController));
router.get('/', postController.listar.bind(postController));
router.get('/:id', postController.buscarPorId.bind(postController));
router.put('/:id', postController.atualizar.bind(postController));
router.delete('/:id', postController.remover.bind(postController));

export default router;