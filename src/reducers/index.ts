import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { ProfileDetails } from '../actions';

import { ToggleActionDetails } from '../components/Sidebar/actions';

import { sideBarReduer } from './sidebar.reducer';

export interface StoreState {
  profile: ProfileDetails;
  sideBar: ToggleActionDetails;
}

export const reducers = combineReducers<StoreState>({
  profile: profileReducer,
  sideBar: sideBarReduer,
});