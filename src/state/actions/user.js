import { USER } from '../types';

const { LOGINED } = USER;
const UserLogined = (payload = true) => {
	const a = {
		type: LOGINED,
		value: payload,
	};
	return (a);
};
export default {
	UserLogined
}