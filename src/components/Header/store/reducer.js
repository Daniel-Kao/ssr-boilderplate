import { GET_LOGIN_STATUS, LOGIN, LOGOUT } from './constants';

const defaultState = {
  login: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LOGIN_STATUS:
      return {
        ...state,
        login: action.login
      };
    case LOGIN:
      return {
        ...state,
        login: true
      };
    case LOGOUT:
      return {
        ...state,
        login: false
      };
    default:
      return state;
  }
};
