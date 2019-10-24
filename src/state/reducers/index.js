import { combineReducers } from 'redux';
import user from './user';

const MainReducer = combineReducers({
  user,
});
export default MainReducer;
