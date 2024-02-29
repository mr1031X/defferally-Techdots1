import { ReduxState } from '@/src/store';

const authSelector = (state: ReduxState) => state.feature.auth;

export const getUserData = (state: ReduxState) => {
  const data = authSelector(state);

  return data;
}
