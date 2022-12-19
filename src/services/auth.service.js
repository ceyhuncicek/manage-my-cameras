import axios from 'axios';
import getAuthKey from '@/helpers/auth-key';

const login = (email, password) => {
  const config = {
    params: {
      username: email,
      password,
      grant_type: 'password',
      scope: 'write',
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getAuthKey()}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.VUE_APP_BASE_URL}/oauth/token`, null, config)
      .then(({ data }) => {
        if (data.access_token) {
          return resolve(data);
        }
        return reject(data);
      })
      .catch(({ response }) => {
        reject(response?.data);
      });
  });
};

export default {
  login,
};
