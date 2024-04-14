import { CodeType, RoleType } from '../../../types';

export interface ISignupData {
  email: string;
  phone: string;
  password: string;
  repeatedPassword: string;
  role: RoleType;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IChangeEmailData {
  email: string;
}

export interface ISetNewPasswordData {
  password: string;
  repeatedPassword: string;
}

export interface IVerifyCodeData {
  code: number;
  codeType: CodeType;
  email: string;
}

export interface IResendCodeData {
  codeType: CodeType;
  email: string;
}
