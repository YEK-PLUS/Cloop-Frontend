import { USER } from '../types';

const { LOGINED, SAVE } = USER;
const UserLogined = (payload = true) => {
  const a = {
    type: LOGINED,
    value: payload,
  };
  return (a);
};
const UserSave = (payload) => {
  const a = {
    type: SAVE,
    value: payload,
  };
  return (a);
};
export default {
  UserLogined,
  UserSave,
};
