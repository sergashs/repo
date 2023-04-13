import Router from 'express';
import UserController from '../Controllers/user.controllers.js';

const router = new Router();


router.get('/users/:id', UserController.getUser);
router.get('/users', UserController.getSelfUser);
// router.put('/posts/:id', PostController.update);
// router.delete('/posts/:id', PostController.delete);

export default router;