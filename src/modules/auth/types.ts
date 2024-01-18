export interface IUserState {
  id: string;
  isActive: boolean;
  isAuth: boolean;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  isActive: boolean;
}
