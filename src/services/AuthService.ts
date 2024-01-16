import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { ILoginData, ISignUpData } from './types/request';
import { AuthResponse } from './types/response';

export class AuthService {
  static async login({
    email,
    password,
  }: ILoginData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('login', {
      email,
      password,
    });
  }

  static async signUp({
    email,
    phone,
    password,
    repeatedPassword,
  }: ISignUpData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('signup', {
      email,
      phone,
      password,
      repeatedPassword,
    });
  }

  static async logout(): Promise<void> {
    return authServiceAPI.post('logout');
  }
}
