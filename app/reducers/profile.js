import {
  LOADING_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  HIDE_ALERT,
} from '../actions/type';

const initialState = {
  loading_profile: false,
  profile: [],
  update_profile_success: false,
  profile_error: {},
  alert: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        profile: action.profile,
        loading_profile: false,
      });
    case GET_PROFILE_FAILURE:
      return Object.assign({}, state, {
        profile_error: action.error,
        loading_profile: false,
      });
    case LOADING_PROFILE:
      return Object.assign({}, state, {
        loading_profile: true,
      });
    case UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        update_profile_success: true,
        alert: true,
      });
    case UPDATE_PROFILE_FAILURE:
      return Object.assign({}, state, {
        profile_error: action.error,
        update_profile_success: false,
      });
    case HIDE_ALERT:
      return Object.assign({}, state, {
        alert: false,
      });

    default:
      return state;
  }
};
