import { LanguageType } from '../../../types';

export interface ILanguageResponse {
  language: LanguageType;
}

export interface IUserResponse {
  language: LanguageType;
  organizationId: string;
}
