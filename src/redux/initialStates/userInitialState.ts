import { IUserState } from '../../modules/auth';

export const userInitialState: IUserState = {
  id: '',
  email: '',
  activationLinkId: '',
  isVerifiedEmail: false,
  isActive: false,
  isAuth: false,
  success: '',
  loading: false,
  error: null,
};
