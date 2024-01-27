import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import { ICreateStoreData, IStore } from '../modules/stores';

export class ProductService {
  static async createStore({
    name,
    description,
  }: // logo,
  ICreateStoreData): Promise<AxiosResponse<IStore[]>> {
    return productServiceAPI.post<IStore[]>('/store', {
      name,
      description,
      // logo,
    });
  }

  static async getAllStores(): Promise<AxiosResponse<IStore[]>> {
    return productServiceAPI.get<IStore[]>('/store');
  }

  static async getStoreById(id: string): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.get<IStore>(`/store/${id}`);
  }

  static async updateStore({
    id,
    name,
    description,
  }: IStore): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.patch<IStore>(`/store/${id}`, {
      name,
      description,
      // logo,
    });
  }
}
