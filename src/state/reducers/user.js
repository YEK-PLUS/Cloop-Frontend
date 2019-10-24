import { USER } from '../types';

const { LOGINED, SAVE } = USER;


const UserDefaultState = {
  logined: 'waiting',
  user: {},
};


const User = (state = UserDefaultState, action) => {
  switch (action.type) {
    case LOGINED:
      return { ...state, logined: action.value };
    case SAVE:
      return { ...state, user: action.value };
    default:
      return state;
  }
};

export default User;
