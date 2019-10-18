import { combineReducers } from 'redux';
import user from './user';
import departments from './departments';

export default combineReducers({
  user,
  departments,
});
