import Router from 'express';
const router = new Router();
import controller from '../Controllers/auth.controllers.js';
import { check } from "express-validator";

router.post('/registration',
	[
		check('username', "username cannot be empty").notEmpty(),
		check('username', "username must be more than 3 characters").isLength({ min: 3, }),
		check('password', "password must be more than 4 and less than 20 characters").isLength({ min: 4, max: 10 })
	],
	controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);
router.get('/user/', controller.getUser);
router.put('/bookmark', controller.updateBookMarks);


export default router;