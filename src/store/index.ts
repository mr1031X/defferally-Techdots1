import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './slices';


export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
