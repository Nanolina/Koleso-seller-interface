import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import {
  IChangeEmailData,
  ILoginData,
  ISetNewPasswordDataForService,
  ISignupData,
} from './types/request';
import { AuthResponse, IEmailResponse } from './types/response';

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

  static async signup({
    email,
    phone,
    password,
    repeatedPassword,
  }: ISignupData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/signup', {
      email,
      phone,
      password,
      repeatedPassword,
    });
  }

  static async logout(): Promise<void> {
    return authServiceAPI.post('/logout');
  }

  static async changeEmail({
    email,
  }: IChangeEmailData): Promise<AxiosResponse<IEmailResponse>> {
    return authServiceAPI.patch<IEmailResponse>('/change-email', {
      email,
    });
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
  }: ISetNewPasswordDataForService): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>(`/password/set/${userId}`, {
      password,
      repeatedPassword,
    });
  }
}
