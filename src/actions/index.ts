import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ProfileDetails {
  id: number;
  login: string;
  html_url: string;
  public_repos: number;
  name: string;
}

//Optional for Dispatch
export interface s {
  type: ActionTypes.FETCH_DATA;
  payload: ProfileDetails;
}

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<ProfileDetails>(
      'https://api.github.com/users/imrishav'
    );

    dispatch<s>({
      type: ActionTypes.FETCH_DATA,
      payload: res.data,
    });
  };
};
