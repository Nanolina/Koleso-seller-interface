import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import { IProduct } from '../modules/product';
import { IStore } from '../modules/stores';

export class ProductService {
  // Stores
  static async createStore(
    storeFormData: FormData
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.post<IStore>('/store', storeFormData);
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
    return productServiceAPI.delete<IStore>(`/store/${id}`);
  }

  // Products
  static async createProduct(
    productFormData: FormData
  ): Promise<AxiosResponse<IProduct>> {
    console.log('sendedData', productFormData);
    return productServiceAPI.post<IProduct>('/product', productFormData);
  }

  static async getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    return productServiceAPI.get<IProduct[]>('/product');
  }

  static async getProductById(id: string): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.get<IProduct>(`/product/${id}`);
  }
}
