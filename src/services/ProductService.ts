import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import { IStore } from '../modules/stores';

export class ProductService {
  static async createStore(
    storeFormData: FormData
  ): Promise<AxiosResponse<IStore[]>> {
    return productServiceAPI.post<IStore[]>('/store', storeFormData);
  }

  static async getAllStores(): Promise<AxiosResponse<IStore[]>> {
    return productServiceAPI.get<IStore[]>('/store');
  }

  static async getStoreById(id: string): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.get<IStore>(`/store/${id}`);
  }

  static async updateStore(
    id: string,
    storeFormData: FormData
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.patch<IStore>(`/store/${id}`, storeFormData);
  }

  static async removeStore(id: string): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.delete(`/store/${id}`);
  }
}
