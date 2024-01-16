import { IUserState } from '../../../modules/auth';

export interface AuthResponse {
  token: string;
  user: IUserState;
}
