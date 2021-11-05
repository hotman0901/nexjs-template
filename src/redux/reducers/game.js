import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '@redux/actionTypes/game';

export const INITIAL_STATE = {
  nextUserId: 1,
  character: {},
  isFetchedOnServer: false,
  error: null,
};

export const game = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      // ssr
      case HYDRATE:
        return { ...state, ...payload };
      case FETCH_USER_SUCCESS:
        draft.character = payload.response;
        draft.isFetchedOnServer = payload.isServer;
        draft.nextUserId = state.nextUserId + 1;
        break;
      case FETCH_USER_FAILURE:
        draft.error = payload.error;
        draft.isFetchedOnServer = payload.isServer;
        break;
      default:
        return state;
    }
  });
