import { ActionTypes } from '../actions/types';
import { Action } from 'redux';

export interface FetchSingleVideo {
  isLoading: Boolean;
  video: Object;
  comments: string[];
  errorFetching: String;
}

const intialState: FetchSingleVideo = {
  isLoading: true,
  video: {},
  comments: [],
  errorFetching: '',
};

type FetchVideoAction = {
  type: ActionTypes;
  payload: any;
};

export const singleVideoReducer = (
  state = intialState,
  action: FetchVideoAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_VIDEO_START:
      return {
        ...state,
        isLoading: true,
        errorFetching: '',
      };
    case ActionTypes.FETCH_VIDEO_SUCESSS:
      return {
        ...state,
        video: action.payload,
        isLoading: false,
        errorFetching: '',
      };
    case ActionTypes.FETCH_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorFetching: action.payload,
      };
    case ActionTypes.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
