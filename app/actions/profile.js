import {
  LOADING_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  HIDE_ALERT,
} from './type';
import axios from 'axios';
import { backend } from '../config/config';

const get_profile = userId => dispatch => {
  dispatch(loading_profile);
  axios
    .get(`${backend.baseUrl}api/auth/users/${userId}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE_SUCCESS,
        profile: res.data.data,
      })
    )
    .catch(error =>
      dispatch({
        type: GET_PROFILE_FAILURE,
        error,
      })
    );
};

const loading_profile = () => ({ type: LOADING_PROFILE });

const update_profile = (userId, profile) => dispatch => {
  axios
    .patch(`${backend.baseUrl}api/auth/users/${userId}`, profile)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
      });

      setTimeout(() => dispatch({ type: HIDE_ALERT }), 3000);
    })
    .catch(error =>
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        error,
      })
    );
};

module.exports = {
  get_profile,
  update_profile,
};
