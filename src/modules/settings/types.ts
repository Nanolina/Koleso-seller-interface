import { LanguageType } from '../../types';

export interface ISettingProps {
  title: string;
  extra?: string;
  redirectPage: string;
}

export interface IPhonePayload {
  phone: string;
}

export interface ILanguagePayload {
  language: LanguageType;
}
