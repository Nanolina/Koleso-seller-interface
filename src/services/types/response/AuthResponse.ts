import { IAuthPayload, IUserState } from '../../../modules/auth';

export interface AuthResponse {
  token: string;
  user: IUserState;
}

export interface ISetNewPasswordResponse {
  token: string;
  user: IAuthPayload;
}

export interface IEmailResponse {
  email: string;
  isVerifiedEmail: boolean;
}

export interface IPhoneResponse {
  phone: string;
}
