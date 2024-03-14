import { LanguageType } from '../../types';

export interface ISettingProps {
  title: string;
  extra?: string;
  redirectPage: string;
}

export interface IPhonePayload {
  phone: string;
}

export interface IUserPayload {
  language: LanguageType;
  organizationId: string;
}

export interface ILanguagePayload {
  language: LanguageType;
}

export interface IChangePasswordData {
  currentPassword: string;
  newPassword: string;
  repeatedPassword: string;
}
