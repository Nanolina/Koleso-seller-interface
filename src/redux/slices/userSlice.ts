import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import {
  changeEmailCases,
  checkAuthCases,
  loginCases,
  logoutCases,
  resendEmailConfirmationCases,
  signupCases,
} from '../cases/user';
import { createValueReducers } from '../sliceHelpers';

const userSlice = createValueReducers(
  {
    id: '',
    isActive: false,
    isAuth: false,
    loading: false,
    error: null,
  } as IUserState,
  (builder: ActionReducerMapBuilder<IUserState>) => {
    loginCases(builder);
    signupCases(builder);
    logoutCases(builder);
    checkAuthCases(builder);
    changeEmailCases(builder);
    resendEmailConfirmationCases(builder);
  }
);

export default userSlice.reducer;
export const { setValue: setValueUser, resetValue: resetValueUser } =
  userSlice.actions;
