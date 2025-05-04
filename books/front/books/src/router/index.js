// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Можеш змінити на свою сторінку
import User from '../views/User.vue'; // Інша сторінка

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: About
	// }
	{
		path: '/user/:id',
		name: 'User',
		component: User
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
