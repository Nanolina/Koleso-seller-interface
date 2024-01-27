import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
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

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    loginCases(builder);
    signupCases(builder);
    logoutCases(builder);
    checkAuthCases(builder);
    changeEmailCases(builder);
    resendEmailConfirmationCases(builder);
    requestPasswordRecoveryCases(builder);
    setNewPasswordCases(builder);
  },
});

export default userSlice.reducer;
