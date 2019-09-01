import { GET_TRANS } from './constants';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TRANS:
      return {
        ...state,
        list: action.translations
      };
    default:
      return state;
  }
};
