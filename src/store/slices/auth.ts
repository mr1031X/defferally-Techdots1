import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageService } from '@/src/network/local-storage';

const localStorageService = new LocalStorageService();

const INITIAL_STATE = {
  data: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    updateUserData: (state, action) => {
      state.data = action.payload.userData;
    },
    resetUserData: (state) => {
      state.data = INITIAL_STATE.data;
      localStorageService.remove('token');
    }
  }
});

export const { updateUserData, resetUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
