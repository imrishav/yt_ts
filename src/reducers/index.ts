import { combineReducers } from 'redux';
import { profileReducer, ProfileDet, LoginAction } from './profile';
import { ProfileDetails } from '../actions';

import { ToggleActionDetails } from '../components/Sidebar/actions';

import { sideBarReduer } from './sidebar.reducer';
import { FetchVideo, videoReducer } from './video.reducer';
import { singleVideoReducer, FetchSingleVideo } from './singleVideo.reducer';

export interface StoreState {
  profile: ProfileDet;
  sideBar: ToggleActionDetails;
  fetchVideo: FetchVideo;
  video: FetchSingleVideo;
}

export const reducers = combineReducers<StoreState>({
  profile: profileReducer,
  sideBar: sideBarReduer,
  fetchVideo: videoReducer,
  video: singleVideoReducer,
});
