import { USER } from '../types';

const { LOGINED } = USER;


const UserDefaultState = {
	logined: 'waiting',
};


const User = (state = UserDefaultState, action) => {
	switch (action.type) {
	case LOGINED:
		return { ...state, logined: action.value };
	default:
		return state;
	}
};

export default User;
