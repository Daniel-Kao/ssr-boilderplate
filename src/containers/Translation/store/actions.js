import { GET_TRANS } from './constants';

const transAction = translations => ({
  type: GET_TRANS,
  translations
});

export const getTranslation = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/api/translation').then(res => {
    dispatch(transAction(res.data.translations));
  });
};
