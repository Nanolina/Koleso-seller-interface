import { ISetNewPasswordPayload, IUserState } from '../../../modules/auth';

export interface AuthResponse {
  token: string;
  user: IUserState;
}

export interface ISetNewPasswordResponse {
  token: string;
  user: ISetNewPasswordPayload;
}

export interface IEmailResponse {
  email: string;
}

export interface IPhoneResponse {
  phone: string;
}
