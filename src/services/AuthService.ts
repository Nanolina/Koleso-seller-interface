import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { IChangePasswordData } from '../modules/settings';
import {
  IChangeEmailData,
  ILoginData,
  ISetNewPasswordDataForService,
  ISignupData,
} from './types/request';
import {
  AuthResponse,
  IEmailResponse,
  IPhoneResponse,
  ISetNewPasswordResponse,
} from './types/response';

export class AuthService {
  static async login({
    email,
    password,
  }: ILoginData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/login', {
      email,
      password,
    });
  }

  static async signup(
    userData: ISignupData
  ): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/signup', userData);
  }

  static async logout(): Promise<void> {
    return authServiceAPI.post('/logout');
  }

  static async changeEmail(
    email: string
  ): Promise<AxiosResponse<IEmailResponse>> {
    return authServiceAPI.patch<IEmailResponse>('/change-email', {
      email,
    });
  }

  static async changePhone(
    phone: string
  ): Promise<AxiosResponse<IPhoneResponse>> {
    return authServiceAPI.patch<IPhoneResponse>('/change-phone', {
      phone,
    });
  }

  static async changePassword(
    passwordValues: IChangePasswordData
  ): Promise<boolean> {
    return authServiceAPI.patch('/change-password', passwordValues);
  }

  // To check email in the DB and send a link "reset password" to email
  static async requestPasswordRecovery({
    email,
  }: IChangeEmailData): Promise<void> {
    return authServiceAPI.post('/password/recovery', {
      email,
    });
  }

  static async setNewPassword({
    userId,
    password,
    repeatedPassword,
  }: ISetNewPasswordDataForService): Promise<
    AxiosResponse<ISetNewPasswordResponse>
  > {
    return authServiceAPI.post<ISetNewPasswordResponse>(
      `/password/set/${userId}`,
      {
        password,
        repeatedPassword,
      }
    );
  }
}
