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
  organizationId: '',
  success: '',
  loading: false,
  error: null,
};
