import axios from 'axios';
import config from './config';

export const customAxios = axios.create(config());
customAxios.interceptors.request.use(function (config) {
	return config;
}, null, { synchronous: true });

customAxios.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		return error.response.data
	});

export default customAxios;