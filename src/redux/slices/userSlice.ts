import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import { loginCases, logoutCases, signupCases } from '../cases/user';
import { createValueReducers } from '../sliceHelpers';

const userSlice = createValueReducers(
  {
    id: '',
    isActive: false,
    loading: false,
    error: null,
  } as IUserState,
  (builder: ActionReducerMapBuilder<IUserState>) => {
    loginCases(builder);
    signupCases(builder);
    logoutCases(builder);
  }
);

export default userSlice.reducer;
export const { setValue: setValueUser, resetValue: resetValueUser } =
  userSlice.actions;
