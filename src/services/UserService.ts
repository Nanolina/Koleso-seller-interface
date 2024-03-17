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

  // Organization
  static async getOrganizationById(
    id: string
  ): Promise<AxiosResponse<IOrganization>> {
    return userServiceAPI.get<IOrganization>(`/organization/${id}`);
  }

  static async createOrganization(
    organizationFormData: FormData
  ): Promise<AxiosResponse<IOrganization>> {
    return userServiceAPI.post<IOrganization>(
      `/organization`,
      organizationFormData
    );
  }

  static async updateOrganization(
    id: string,
    organizationFormData: FormData
  ): Promise<AxiosResponse<IOrganization>> {
    return userServiceAPI.patch<IOrganization>(
      `/organization/${id}`,
      organizationFormData
    );
  }
}
