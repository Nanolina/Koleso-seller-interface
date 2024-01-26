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
}
