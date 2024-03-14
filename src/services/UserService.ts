import { AxiosResponse } from 'axios';
import { userServiceAPI } from '../http';
import { IOrganization } from '../modules/settings/organization';
import { ILanguageResponse, IUserResponse } from './types/response';

export class UserService {
  static async getUserById(): Promise<AxiosResponse<IUserResponse>> {
    return userServiceAPI.get<IUserResponse>(`/user`);
  }

  static async changeLanguage(
    language: string
  ): Promise<AxiosResponse<ILanguageResponse>> {
    return userServiceAPI.patch<ILanguageResponse>('/user/change-language', {
      language,
    });
  }

  static async createOrganization(
    organizationFormData: FormData
  ): Promise<AxiosResponse<IOrganization>> {
    console.log('organizationFormData', organizationFormData);
    return userServiceAPI.post<IOrganization>(
      `/organization`,
      organizationFormData
    );
  }

  static async updateOrganization(
    id: string,
    organizationFormData: FormData
  ): Promise<AxiosResponse<IOrganization>> {
    console.log('organizationFormData', organizationFormData);
    return userServiceAPI.patch<IOrganization>(
      `/organization/${id}`,
      organizationFormData
    );
  }
}
