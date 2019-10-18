import { GET_DEPARTMENTS_SUCCESS, GET_DEPARTMENTS_FAILURE } from '../actions/departments';

export default (state = { isSuccess: false, departments: [], count: 0 }, action) => {
  if (action.type === GET_DEPARTMENTS_SUCCESS) {
    return Object.assign({}, state, {
      isSuccess: true,
      departments: action.departments,
      count: action.count,
    });
  } else if (action.type === GET_DEPARTMENTS_FAILURE) {
    return Object.assign({}, state, {
      isSuccess: false,
      error: action.error,
    });
  }
  return state;
};
