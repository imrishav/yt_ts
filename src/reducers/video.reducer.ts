import { ActionTypes } from '../actions/types';
import { Action } from 'redux';

export interface FetchVideo {
  isLoading: Boolean;
  allVideos: String[];
  errorFetching: String;
}

const intialState: FetchVideo = {
  isLoading: true,
  allVideos: [],
  errorFetching: '',
};

type FetchVideoAction = {
  type: ActionTypes;
  payload: any;
};

export const videoReducer = (state = intialState, action: FetchVideoAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        errorFetching: '',
      };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        allVideos: action.payload,
        isLoading: false,
        errorFetching: '',
      };
    case ActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorFetching: action.payload,
      };
    default:
      return state;
  }
};
