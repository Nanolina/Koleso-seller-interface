import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import {
  changeEmailCases,
  changeLanguageCases,
  changePasswordCases,
  changePhoneCases,
  checkAuthCases,
  getUserByIdCases,
  loginCases,
  logoutCases,
  requestPasswordRecoveryCases,
  resendCodeCases,
  setNewPasswordCases,
  signupCases,
  verifyCodeCases,
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
    changePhoneCases(builder);
    requestPasswordRecoveryCases(builder);
    setNewPasswordCases(builder);
    getUserByIdCases(builder);
    changeLanguageCases(builder);
    changePasswordCases(builder);
    verifyCodeCases(builder);
    resendCodeCases(builder);
  },
});

export default userSlice.reducer;
