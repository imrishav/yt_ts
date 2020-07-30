import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export const fetchVideoStart = () => ({
  type: ActionTypes.FETCH_DATA_START,
});
export const fetchVideoSuccess = (data: any) => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload: data.data.data,
});
export const fetchVideoFailure = (error: any) => ({
  type: ActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchVideos = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchVideoStart());

    try {
      const data = await axios.get('http://localhost:3001/api/v1/video');
      dispatch(fetchVideoSuccess(data));
    } catch (err) {
      dispatch(fetchVideoFailure(err));
    }
  };
};

// export const;
