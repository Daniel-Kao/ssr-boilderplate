import { CHANGE_LIST } from './constants';

const article_list = list => ({
  type: CHANGE_LIST,
  list
});

export const getList = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance
    .get('/api/todos')
    .then(res => {
      const list = res.data.todos;
      dispatch(article_list(list));
    })
    .catch(err => console.log(err));
};
