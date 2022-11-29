import API from '@/api';
export default {
  getSession: (post) => {
    return API.post('/sessions', Object.assign(post));
  }
};
