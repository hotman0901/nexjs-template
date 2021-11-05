import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  START_FETCHING_USERS,
  STOP_FETCHING_USERS,
} from '@redux/actionTypes/game';

export const startFetchingUsers = () => ({
  type: START_FETCHING_USERS,
});
export const stopFetchingUsers = () => ({
  type: STOP_FETCHING_USERS,
});
export const fetchUser = (isServer = false) => ({
  type: FETCH_USER,
  payload: { isServer },
});
export const fetchUserSuccess = (response, isServer) => ({
  type: FETCH_USER_SUCCESS,
  payload: { response, isServer },
});

export const fetchUserFailure = (error, isServer) => ({
  type: FETCH_USER_FAILURE,
  payload: { error, isServer },
});
