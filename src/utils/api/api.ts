import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface AuthenticateType {
  requestType: string;
  data: string;
}

const URL = 'http://localhost:3001/api/v1/auth/signup';

export const authenticate = async (requestType: string, data: Object) => {
  const backendurl = process.env.REACT_APP_BACKEND_URL;

  // console.log('url', url);

  try {
    const response = await Axios.post(
      `http://localhost:3001/api/v1/auth/${requestType}`,
      data
    );

    localStorage.setItem('user', JSON.stringify(response));

    return response;
  } catch (err) {
    return err.response;
  }
};

// export const checkAuthentication = () => {
//   let token: string;

//   const user = JSON.parse(localStorage.getItem('user')).data.user;

//   if (user) {
//     token = user.token;
//   }

//   const authen = Axios.create<AxiosRequestConfig>({
//     baseURL: 'http://localhost:3001/api/v1/auth/',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

// };
