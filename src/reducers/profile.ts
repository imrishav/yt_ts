import { ActionTypes } from '../actions/types';
import { ProfileDetailsAction, LoginPayload } from '../actions/authActions';

export interface ProfileDet {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  avatar: string;
  cover: string;
  channelDesc: string;
}

const initalState: ProfileDet = {
  id: '',
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  avatar: '',
  cover: '',
  channelDesc: '',
};

export type LoginAction = { type: ActionTypes.LOGIN; payload: ProfileDet };

export const profileReducer = (
  state: ProfileDet = initalState,
  action: LoginAction
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;
    default:
      return state;
  }
};
