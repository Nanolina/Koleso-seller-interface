import { AxiosResponse } from 'axios';
import { userServiceAPI } from '../http';
import { ILanguagePayload } from '../modules/settings';
import { ILanguageResponse } from './types/response';

export class UserService {
  static async getUserById(): Promise<AxiosResponse<ILanguagePayload>> {
    return userServiceAPI.get<ILanguagePayload>(`/user`);
  }

  static async changeLanguage(
    language: string
  ): Promise<AxiosResponse<ILanguageResponse>> {
    return userServiceAPI.patch<ILanguageResponse>('/user/change-language', {
      language,
    });
  }
}
