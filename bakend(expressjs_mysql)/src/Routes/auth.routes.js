import Router from 'express';
import AuthController from '../Controllers/auth.controllers.js';

const router = new Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);


export default router;