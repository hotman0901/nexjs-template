import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@redux/reducers';
import rootEpic from '@redux/epics';

const makeStore = initialState => {
  const epicMiddleware = createEpicMiddleware();
  let middleware = [epicMiddleware];

  if (process.env.DEPLOY_TYPE !== 'production') {
    const logger = createLogger({ collapsed: true });
    middleware = [...middleware, logger];
  }

  const reduxMiddleware = applyMiddleware(...middleware);

  // server side
  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.data, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    }
    return rootReducer(state, action);
  };

  let store;

  if (process.env.MY_NODE_ENV !== 'production') {
    store = createStore(
      reducer,
      initialState,
      compose(composeWithDevTools(reduxMiddleware))
    );
  } else {
    store = createStore(reducer, initialState, reduxMiddleware);
  }

  epicMiddleware.run(rootEpic);

  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.MY_NODE_ENV !== 'production',
});
