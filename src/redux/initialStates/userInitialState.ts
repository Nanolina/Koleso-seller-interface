import { IUserState } from '../../modules/auth';

export const userInitialState: IUserState = {
  id: '',
  email: '',
  phone: '',
  activationLinkId: '',
  isVerifiedEmail: false,
  isActive: false,
  isSeller: false,
  success: '',
  loading: false,
  error: null,
};
