import { USER } from '../types';

const { LOGINED } = USER;
export const UserLogined = (payload = true) => {
	const a = {
		type: LOGINED,
		value: payload,
	};
	return (a);
};
