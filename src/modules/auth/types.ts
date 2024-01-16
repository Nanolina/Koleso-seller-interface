export interface IUserState {
  id: string;
  isActive: boolean;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  isActive: boolean;
}
