import axios from 'axios';
import config from './config';

const url = new URL(window.location.href);
const token = url.searchParams.get("token")

// localStorage.setItem('token', 'TEST_TOKEN')
if (token) {
	localStorage.setItem('token', token)
	if (window.location.pathname == '/') {
		window.location.href = '/'
	}
} else {
	if (!localStorage.getItem('token')) {
		window.location.href = "https://t.me/quirky_bookworm_bot"
	}
}

// localStorage.setItem('token', 'icCwAJ69M78dLMje1CA5ePLHSdw07YuU')
// localStorage.setItem('token', 'V0qxHGvmhvF6WEPHtZsI4kFocod1EhkP')
export const customAxios = axios.create(config());
customAxios.interceptors.request.use(function (config) {
	// customAxios.defaults.params = { token: token }
	// config.params = { token }


	config.headers['Access-Token'] = localStorage.getItem('token');

	return config;
}, function (err) {
	console.log(err);
}, { synchronous: true });

customAxios.interceptors.response.use(
	response => {
		if (response.data.err[0] == 4) {
			window.location.href = "https://t.me/quirky_bookworm_bot"
		}
		return response.data
	},
	error => {
		// console.log(_.head(error.response.data.data));

		return error.response.data
	});


export default customAxios;

