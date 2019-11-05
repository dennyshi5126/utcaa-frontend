import { combineReducers } from 'redux';
import user from './user';
import departments from './departments';
import profile from './profile';

export default combineReducers({
  user,
  departments,
  profile,
});
