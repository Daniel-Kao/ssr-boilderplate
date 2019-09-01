import { GET_LOGIN_STATUS, LOGIN, LOGOUT } from './constants';

const getLoginStatus = login => ({
  type: GET_LOGIN_STATUS,
  login
});

const loginAction = () => ({
  type: LOGIN
});

const logoutAction = () => ({
  type: LOGOUT
});

export const getHeaderInfo = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.post('/api/isLogin').then(res => {
    dispatch(getLoginStatus(res.data.login));
  });
};

export const tryLogin = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.post('/api/login').then(res => {
    if (res.data.code === 0) {
      dispatch(loginAction());
    }
  });
};

export const tryLogout = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.post('/api/logout').then(res => {
    if (res.data.code === 0) {
      dispatch(logoutAction());
    }
  });
};
