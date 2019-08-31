import { CHANGE_LIST } from './constants';

const article_list = list => ({
  type: CHANGE_LIST,
  list,
});

export const getList = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/todos').then(res => {
    const list = res.data;
    dispatch(article_list(list));
  });
};
