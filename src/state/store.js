import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';

const SetupStore = (PreloadedState) => {
  const store = createStore(
    Reducers,
    PreloadedState,
    applyMiddleware(thunk),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = Reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default SetupStore;
