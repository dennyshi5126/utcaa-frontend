import axios from 'axios';
import { backend } from '../config/config.js';

export const GET_DEPARTMENTS_SUCCESS = 'GET_DEPARTMENTS_SUCCESS';
export const GET_DEPARTMENTS_FAILURE = 'GET_DEPARTMENTS_FAILURE';

const baseUrl = backend.baseUrl;

export const getDepartments = () => {
  return dispatch => {
    axios
      .get(baseUrl + '/api/public/departments')
      .then(res => {
        dispatch(getDepartmentsSuccess(res.data.data, res.data.count));
      })
      .catch(error => {
        dispatch(getDepartmentsFailure(error));
      });
  };
};

const getDepartmentsSuccess = (data, count) => {
  return {
    type: GET_DEPARTMENTS_SUCCESS,
    departments: data,
    count: count,
  };
};

const getDepartmentsFailure = error => {
  return {
    type: GET_DEPARTMENTS_FAILURE,
    error: error,
  };
};
