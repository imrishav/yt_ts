import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import history from '../history';
import { authenticate } from '../utils/api/api';

const URL = 'http://localhost:3001/api/v1/auth/login';

// export interface LoginResponse {
//   user: {
//     id: string;
//     firstname: string;
//     lastname: string;
//     username: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     avatar: string;
//     cover: string;
//     channelDesc: string;
//   };
// }

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ProfileDetailsAction {
  type: ActionTypes;
  payload: LoginPayload;
}

export interface ProfileSignUppAction {
  type: ActionTypes;
  payload: SignUpPayload;
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export const loginUser = (payload: LoginPayload) => {
  return async (dispatch: Dispatch) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.post(URL, payload);
      console.log('..hit', res);
      dispatch<ProfileDetailsAction>({
        type: ActionTypes.LOGIN,
        payload: res.data.user,
      });
      history.push('/home');
    } catch (err) {
      if (err.response.status === 401) {
        dispatch<ProfileDetailsAction>({
          type: ActionTypes.AUTHENTICATION_FAILURE,
          payload: err.response.data.message,
        });
      } else {
        dispatch<ProfileDetailsAction>({
          type: ActionTypes.AUTHENTICATION_FAILURE,
          payload: err.response.data.message,
        });
      }
    }
  };
};

export const signUp = (payload: SignUpPayload) => {
  return async (dispatch: Dispatch) => {
    console.log('signup', payload);

    let user = await authenticate('signup', payload);

    if (user.data.success === 'false') {
      dispatch<ProfileSignUppAction>({
        type: ActionTypes.AUTHENTICATION_FAILURE,
        payload: user.data.message,
      });
    } else {
      dispatch<ProfileDetailsAction>({
        type: ActionTypes.LOGIN,
        payload: user.data.user,
      });
      history.push('/home');
      console.log('CHal gya bhai Hai bhai erri hai', user);
    }

    // console.log('fromactons', user);
  };
};
