import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import { IColorsWithImagesData } from '../modules/product/imageForm';
import {
  ICreateProductData,
  IProduct,
  ISectionType,
  IUpdateProductData,
} from '../modules/product/productForm';
import { IUpdateVariantsData, IVariant } from '../modules/product/variantForm';
import { IStore } from '../modules/stores';
import { IFilterQuery } from '../types';

export class ProductService {
  // Stores
  static async createStore(
    storeFormData: FormData
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.post<IStore>('/store', storeFormData);
  }

  static async getAllStores(
    filter: IFilterQuery
  ): Promise<AxiosResponse<IStore[]>> {
    const queryString = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    return productServiceAPI.get<IStore[]>(`/store?${queryString}`);
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

  static async recoverStore(id: string): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.post<IStore>(`/store/${id}/recover`);
  }

  // Products
  static async createProduct(
    productValues: ICreateProductData
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.post<IProduct>('/product', productValues);
  }

  static async getAllProducts(
    filter: IFilterQuery
  ): Promise<AxiosResponse<IProduct[]>> {
    const queryString = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    return productServiceAPI.get<IProduct[]>(`/product?${queryString}`);
  }

  static async getProductById(
    id: string,
    filterVariants: IFilterQuery
  ): Promise<AxiosResponse<IProduct>> {
    const queryString = `filterVariants=${encodeURIComponent(
      JSON.stringify(filterVariants)
    )}`;
    return productServiceAPI.get<IProduct>(`/product/${id}?${queryString}`);
  }

  static async updateProduct(
    id: string,
    productValues: IUpdateProductData
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.patch<IProduct>(`/product/${id}`, productValues);
  }

  static async removeProduct(id: string): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.delete<IProduct>(`/product/${id}`);
  }

  static async recoverProduct(id: string): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.post<IProduct>(`/product/${id}/recover`);
  }

  // Catalog
  static async getCatalogStructure(): Promise<AxiosResponse<ISectionType[]>> {
    return productServiceAPI.get<ISectionType[]>('/catalog');
  }

  // Variants
  static async updateVariants(
    variants: IUpdateVariantsData,
    productId: string
  ): Promise<AxiosResponse<IUpdateVariantsData>> {
    return productServiceAPI.post<IUpdateVariantsData>(
      `/product/${productId}/variants`,
      variants
    );
  }

  static async recoverVariant(id: string): Promise<AxiosResponse<IVariant[]>> {
    return productServiceAPI.post<IVariant[]>(`/variant/${id}/recover`);
  }

  // Images
  static async updateColorsWithImages(
    productId: string,
    filesFormData: FormData
  ): Promise<AxiosResponse<IColorsWithImagesData>> {
    return productServiceAPI.post<IColorsWithImagesData>(
      `/product/${productId}/images`,
      filesFormData
    );
  }

  static async getAllColorsWithImages(
    productId: string
  ): Promise<AxiosResponse<IColorsWithImagesData[]>> {
    return productServiceAPI.get<IColorsWithImagesData[]>(
      `/product/${productId}/images`
    );
  }
}
