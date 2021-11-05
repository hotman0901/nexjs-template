import { interval, of } from 'rxjs';
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// typescript 有問題
// import { request } from 'universal-rxjs-ajax'; // because standard AjaxObservable only works in browser
import { ajax } from 'rxjs/ajax';
import * as actions from '@redux/actions/game';
import {
  FETCH_USER,
  FETCH_USER_FAILURE,
  START_FETCHING_USERS,
  STOP_FETCHING_USERS,
} from '@redux/actionTypes/game';

export const fetchUsersEpic = action$ =>
  action$.pipe(
    ofType(START_FETCHING_USERS),
    mergeMap(() =>
      interval(10000).pipe(
        map(() => actions.fetchUser()),
        takeUntil(action$.pipe(ofType(STOP_FETCHING_USERS, FETCH_USER_FAILURE)))
      )
    )
  );

export const fetchUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax({
        url: `/api/proxy/users/${state$.value.game.nextUserId}`,
      }).pipe(
        map(response =>
          actions.fetchUserSuccess(response.response, action.payload.isServer)
        ),
        catchError(error =>
          of(
            actions.fetchUserFailure(
              error.xhr.response,
              action.payload.isServer
            )
          )
        )
      )
    )
  );

export default [fetchUsersEpic, fetchUserEpic];
