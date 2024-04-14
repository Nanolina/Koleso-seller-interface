import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { IVerifyCodePayload } from '../modules/auth';
import { IChangePasswordData } from '../modules/settings';
import { CodeType } from '../types';
import {
  IChangeEmailData,
  ILoginData,
  ISetNewPasswordData,
  ISignupData,
  IVerifyCodeData,
} from './types/request';
import {
  AuthResponse,
  IEmailResponse,
  IPhoneResponse,
  ISetNewPasswordResponse,
} from './types/response';

export class AuthService {
  static async signup(
    userData: ISignupData
  ): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/signup', userData);
  }

  static async login({
    email,
    password,
  }: ILoginData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/login', {
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return authServiceAPI.post('/logout');
  }

  // To check email in the DB and send a link "reset password" to email
  static async requestPasswordRecovery({
    email,
  }: IChangeEmailData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/passwords/recovery', {
      email,
    });
  }

  static async setNewPassword({
    password,
    repeatedPassword,
  }: ISetNewPasswordData): Promise<AxiosResponse<ISetNewPasswordResponse>> {
    return authServiceAPI.post<ISetNewPasswordResponse>(`/passwords/set`, {
      password,
      repeatedPassword,
    });
  }

  static async verifyCode({
    code,
    codeType,
  }: IVerifyCodeData): Promise<AxiosResponse<IVerifyCodePayload>> {
    return authServiceAPI.post<IVerifyCodePayload>(
      `/codes/${codeType}/verify`,
      { code }
    );
  }

  static async resendCode(codeType: CodeType): Promise<AxiosResponse<void>> {
    return authServiceAPI.get<void>(`/codes/${codeType}/resend`);
  }

  static async changeEmail(
    email: string
  ): Promise<AxiosResponse<IEmailResponse>> {
    return authServiceAPI.patch<IEmailResponse>('/users/email', {
      email,
    });
  }

  static async changePhone(
    phone: string
  ): Promise<AxiosResponse<IPhoneResponse>> {
    return authServiceAPI.patch<IPhoneResponse>('/users/phone', {
      phone,
    });
  }

  static async changePassword(
    passwordValues: IChangePasswordData
  ): Promise<boolean> {
    return authServiceAPI.patch('/users/password', passwordValues);
  }
}
