import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import {
  changeEmailCases,
  checkAuthCases,
  loginCases,
  logoutCases,
  requestPasswordRecoveryCases,
  resendEmailConfirmationCases,
  setNewPasswordCases,
  signupCases,
} from '../cases/user';
import { userInitialState } from '../initialStates';
import { createValueReducers } from '../sliceHelpers';

const userSlice = createValueReducers(
  userInitialState,
  (builder: ActionReducerMapBuilder<IUserState>) => {
    loginCases(builder);
    signupCases(builder);
    logoutCases(builder);
    checkAuthCases(builder);
    changeEmailCases(builder);
    resendEmailConfirmationCases(builder);
    requestPasswordRecoveryCases(builder);
    setNewPasswordCases(builder);
  }
);

export default userSlice.reducer;
export const { setValue: setValueUser, resetValue: resetValueUser } =
  userSlice.actions;
