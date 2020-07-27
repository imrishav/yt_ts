import { ActionTypes } from '../actions/types';
import { ProfileDetailsAction, LoginPayload } from '../actions/authActions';

export interface ProfileDet {
  user: string | undefined;
  error?: '' | undefined;
}

const initalState: ProfileDet = {
  user: '',
  error: undefined,
};

export type LoginAction = { type: ActionTypes; payload: any };

export const profileReducer = (
  state: ProfileDet = initalState,
  action: LoginAction
) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.AUTHENTICATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
