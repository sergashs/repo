import axios from 'axios';
import config from './config';


export const customAxios = axios.create(config());
customAxios.interceptors.request.use(function (config) {

	return config;
}, function (err) {
	console.log(err);
}, { synchronous: true });

customAxios.interceptors.response.use(
	response => response.data,
	error => {
		// console.log(_.head(error.response.data.data));

		return error.response.data
	});


export default customAxios;

