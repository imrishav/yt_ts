import Axios from 'axios';

interface AuthenticateType {
  requestType: string;
  data: string;
}

const URL = 'http://localhost:3001/api/v1/auth/signup';

export const authenticate = async (requestType: string, data: Object) => {
  const backendurl = process.env.REACT_APP_BACKEND_URL;

  // console.log('url', url);

  try {
    const response = await Axios.post(URL, data);

    return response;
  } catch (err) {
    return err.response;
  }
};
