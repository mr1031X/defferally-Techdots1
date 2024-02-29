import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth'

const persistConfig = {
  key: 'deferaly',
  version: 1,
  storage,
  whitelist: []
};

const allReducers = combineReducers({
  auth: authReducer,
});

const rootReducer = combineReducers({
  feature: persistReducer(persistConfig, allReducers),
});

export default rootReducer;
