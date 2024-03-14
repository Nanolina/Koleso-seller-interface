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
  activationLinkId: string;
  email: string;
  isVerifiedEmail: boolean;
}

export interface IPhoneResponse {
  phone: string;
}
