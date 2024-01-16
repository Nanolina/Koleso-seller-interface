import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import { IAuthPayload } from '../../modules/auth/types';
import { createValueReducers } from '../sliceHelpers';
import { handleLogin, handleLogout, handleSignUp } from '../thunks/userThunks';

const userSlice = createValueReducers(
  {
    id: '',
    isActive: false,
    loading: false,
    error: null,
  } as IUserState,
  (builder: ActionReducerMapBuilder<IUserState>) => {
    builder
      // Login
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        handleLogin.fulfilled,
        (state, action: PayloadAction<IAuthPayload>) => {
          state.id = action.payload.id;
          state.isActive = action.payload.isActive;
          state.loading = false;
        }
      )
      .addCase(handleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to log in';
      })

      // Sign up
      .addCase(handleSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        handleSignUp.fulfilled,
        (state, action: PayloadAction<IAuthPayload>) => {
          state.id = action.payload.id;
          state.isActive = action.payload.isActive;
          state.loading = false;
        }
      )
      .addCase(handleSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to sign up';
      })

      // Logout
      .addCase(handleLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleLogout.fulfilled, (state) => {
        state.id = '';
        state.isActive = false;
        state.loading = false;
      })
      .addCase(handleLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to log out';
      });
  }
);

export default userSlice.reducer;
export const { setValue: setValueUser, resetValue: resetValueUser } =
  userSlice.actions;
