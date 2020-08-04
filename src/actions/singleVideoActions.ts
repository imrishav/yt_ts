import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
// import { checkAuthentication } from '../utils/api/api';
import apiToken from '../utils/api/checkAuthentication';

export const fetchVideoByIDStart = () => ({
  type: ActionTypes.FETCH_DATA_START,
});
export const fetchVideoByID = (data: any) => ({
  type: ActionTypes.FETCH_VIDEO_SUCESSS,
  payload: data.data.data,
});

export const fetchVideoByIDFailure = (error: any) => ({
  type: ActionTypes.FETCH_VIDEO_FAILURE,
  payload: error,
});

export const fetchCommentsById = (comments: string[]) => ({
  type: ActionTypes.FETCH_COMMENTS,
  payload: comments,
});

export const addComment = (videoId: string, commentValue: any) => {
  return async (dispatch) => {
    try {
      const { data } = await apiToken.post(`video/${videoId}/addcomment`, {
        text: commentValue,
      });

      const res = await apiToken.get(`video/${videoId}`);
      dispatch(fetchCommentsById(res.data.data.comments));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchVideoById = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchVideoByIDStart());

    try {
      const res = await apiToken.get(`video/${id}`);
      dispatch(fetchVideoByID(res));
    } catch (error) {
      dispatch(fetchVideoByIDFailure(error));
    }
  };
};

export const fetchComments = (id: string) => {
  return async (dispatch) => {
    console.log('reducer', id);
    try {
      const res = await apiToken.get(`video/${id}`);
      dispatch(fetchCommentsById(res.data.data.comments));
    } catch (error) {
      console.log('commenterror', error);
    }
  };
};
