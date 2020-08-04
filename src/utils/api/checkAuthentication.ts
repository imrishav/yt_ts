import axios from 'axios';

let token;
const user = JSON.parse(localStorage.getItem('user')).data.user;
if (user) {
  token = user.token;
}

const apiToken = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default apiToken;
