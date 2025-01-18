import axios from 'axios';
import config from './config';

export const customAxios = axios.create(config());
customAxios.interceptors.request.use(function (config) {
	config.headers['x-access-token'] = localStorage.getItem('token');
	return config;
}, null, { synchronous: true });

customAxios.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		return error.response
	});

export default customAxios;