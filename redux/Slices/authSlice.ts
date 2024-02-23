import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from '@/interfaces/users'

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAndToken: (state, action: PayloadAction<{ user: User, token: string }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      // Set user data and token in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Clear user data and token from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    // Handle sign-up action here
  },
});

export const { setUserAndToken, logout } = authSlice.actions;

export const selectUser = (state: RootState): User | null => state.auth.user;
export const selectIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;
export const selectAuthStatus = (state: RootState): "idle" | "loading" | "failed" => state.auth.status;
export const selectAuthError = (state: RootState): string | null => state.auth.error;

export default authSlice.reducer;
