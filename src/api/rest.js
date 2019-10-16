import axios from 'axios';
import { getLocalStorage } from '../helper';

const instance = axios.create({
	baseURL: 'http://localhost:8080/',
	timeout: 5000,

});
instance.interceptors.response.use(
	(response) => (response.data),
	(error) => {
		const code = error.response && error.response.data;
		return (code);
	},
);
export default async (path, body) => {
	const header = {
		headers: {
			Authorization: `Bearer ${getLocalStorage('UserToken')}`,
		},
	};
	const r = await instance.post(path, body, header);
	return r;
};
