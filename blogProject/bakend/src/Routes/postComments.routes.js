import Router from 'express';
import PostCommentsController from '../Controllers/postComments.controllers.js';

const router = new Router();

router.post('/posts/:id/comments', PostCommentsController.create);
router.get('/posts/:id/comments', PostCommentsController.getOne);

export default router;