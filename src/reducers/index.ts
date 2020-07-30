import { combineReducers } from 'redux';
import { profileReducer, ProfileDet, LoginAction } from './profile';
import { ProfileDetails } from '../actions';

import { ToggleActionDetails } from '../components/Sidebar/actions';

import { sideBarReduer } from './sidebar.reducer';
import { FetchVideo, videoReducer } from './video.reducer';

export interface StoreState {
  profile: ProfileDet;
  sideBar: ToggleActionDetails;
  fetchVideo: FetchVideo;
}

export const reducers = combineReducers<StoreState>({
  profile: profileReducer,
  sideBar: sideBarReduer,
  fetchVideo: videoReducer,
});
