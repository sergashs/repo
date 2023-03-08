import axios from 'axios';
import config from './config';

// const url = new URL(window.location.href);
// const token = url.searchParams.get("token")


export const customAxios = axios.create(config());
customAxios.interceptors.request.use(function (config) {
    // customAxios.defaults.params = { token: token }
    // config.params = { token }


    // config.headers['Access-Token'] = token;

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

