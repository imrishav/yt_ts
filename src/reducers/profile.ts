import { ProfileDetails, ProfileDetailsAction } from '../actions';
import { ActionTypes } from '../actions/types';

const initalState: ProfileDetails = {
  id: 0,
  login: '',
  html_url: '',
  public_repos: 0,
  name: '',
};

export const profileReducer = (
  state: ProfileDetails = initalState,
  action: ProfileDetailsAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
