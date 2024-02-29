import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import {
  IColorsWithImagesData,
  IUpdateColorsWithImagesData,
} from '../modules/product/imageForm';
import {
  ICreateProductData,
  IProduct,
  ISectionType,
  IUpdateProductData,
} from '../modules/product/productForm';
import { IUpdateVariantsData, IVariant } from '../modules/product/variantForm';
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
    productValues: ICreateProductData
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.post<IProduct>('/product', productValues);
  }

  static async getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    return productServiceAPI.get<IProduct[]>('/product');
  }

  static async getProductById(id: string): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.get<IProduct>(`/product/${id}`);
  }

  static async updateProduct(
    id: string,
    productValues: IUpdateProductData
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.patch<IProduct>(`/product/${id}`, productValues);
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

  static async getAllVariants(
    productId: string
  ): Promise<AxiosResponse<IVariant[]>> {
    return productServiceAPI.get<IVariant[]>(`/product/${productId}/variants`);
  }

  // Images
  static async updateColorsWithImages(
    productId: string,
    filesFormData: FormData
  ): Promise<AxiosResponse<IUpdateColorsWithImagesData>> {
    return productServiceAPI.post<IUpdateColorsWithImagesData>(
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
