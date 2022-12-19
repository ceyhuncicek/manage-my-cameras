import api from '@/helpers/api';

const get = () =>
  new Promise((resolve, reject) => {
    api
      .get('/rest/v2.4/cameras')
      .then(({ data }) => {
        if (data) return resolve(data);
        return reject(data);
      })
      .catch(({ response }) => {
        reject(response?.data);
      });
  });

const find = (id) =>
  new Promise((resolve, reject) => {
    api
      .get(`/rest/v2.4/cameras/${id}`)
      .then(({ data }) => {
        if (data) return resolve(data);
        return reject(data);
      })
      .catch(({ response }) => {
        reject(response?.data);
      });
  });

export default {
  get,
  find,
};
