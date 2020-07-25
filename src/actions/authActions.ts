import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const URL = 'http://localhost:3001/api/v1/auth/login';

export interface LoginResponse {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatar: string;
    cover: string;
    channelDesc: string;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ProfileDetailsAction {
  type: ActionTypes.LOGIN;
  payload: LoginResponse;
}

export const loginUser = (payload: LoginPayload) => {
  return async (dispatch: Dispatch) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const res = await axios.post(URL, payload);

    // axios
    //   .post(URL, payload)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    dispatch<ProfileDetailsAction>({
      type: ActionTypes.LOGIN,
      payload: res.data,
    });
  };
};
