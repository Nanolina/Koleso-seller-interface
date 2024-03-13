import { IUserState } from '../../modules/auth';
import { LanguageType } from '../../types';

export const userInitialState: IUserState = {
  id: '',
  email: '',
  phone: '',
  activationLinkId: '',
  isVerifiedEmail: false,
  isActive: false,
  isSeller: false,
  language: LanguageType.English,
  success: '',
  loading: false,
  error: null,
};
