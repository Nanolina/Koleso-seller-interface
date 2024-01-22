export interface IUserState {
  id: string;
  email: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isAuth: boolean;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  email: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
}
