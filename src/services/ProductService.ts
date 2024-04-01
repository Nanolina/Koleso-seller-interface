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
    storeFormData: FormData,
    organizationId: string
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.post<IStore>('/store', storeFormData, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async getAllStores(
    filter: IFilterQuery,
    organizationId: string
  ): Promise<AxiosResponse<IStore[]>> {
    const queryString = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    return productServiceAPI.get<IStore[]>(`/store?${queryString}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async getStoreById(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.get<IStore>(`/store/${id}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async updateStore(
    id: string,
    storeFormData: FormData,
    organizationId: string
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.patch<IStore>(`/store/${id}`, storeFormData, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async removeStore(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.delete<IStore>(`/store/${id}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async recoverStore(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IStore>> {
    return productServiceAPI.post<IStore>(
      `/store/${id}/recover`,
      {},
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }

  // Products
  static async createProduct(
    productValues: ICreateProductData,
    organizationId: string
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.post<IProduct>('/product', productValues, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async getAllProducts(
    filter: IFilterQuery,
    organizationId: string
  ): Promise<AxiosResponse<IProduct[]>> {
    const queryString = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    return productServiceAPI.get<IProduct[]>(`/product?${queryString}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async getProductById(
    id: string,
    filterVariants: IFilterQuery,
    organizationId: string
  ): Promise<AxiosResponse<IProduct>> {
    const queryString = `filterVariants=${encodeURIComponent(
      JSON.stringify(filterVariants)
    )}`;
    return productServiceAPI.get<IProduct>(`/product/${id}?${queryString}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async updateProduct(
    id: string,
    productValues: IUpdateProductData,
    organizationId: string
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.patch<IProduct>(`/product/${id}`, productValues, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async removeProduct(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.delete<IProduct>(`/product/${id}`, {
      headers: {
        'Organization-Id': organizationId,
      },
    });
  }

  static async recoverProduct(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.post<IProduct>(
      `/product/${id}/recover`,
      {},
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }

  // Catalog
  static async getCatalogStructure(): Promise<AxiosResponse<ISectionType[]>> {
    return productServiceAPI.get<ISectionType[]>('/catalog');
  }

  // Variants
  static async updateVariants(
    variants: IUpdateVariantsData,
    productId: string,
    organizationId: string
  ): Promise<AxiosResponse<IUpdateVariantsData>> {
    return productServiceAPI.post<IUpdateVariantsData>(
      `/product/${productId}/variants`,
      variants,
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }

  static async recoverVariant(
    id: string,
    organizationId: string
  ): Promise<AxiosResponse<IVariant[]>> {
    return productServiceAPI.post<IVariant[]>(
      `/variant/${id}/recover`,
      {},
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }

  // Images
  static async updateColorsWithImages(
    productId: string,
    filesFormData: FormData,
    organizationId: string
  ): Promise<AxiosResponse<IColorsWithImagesData>> {
    return productServiceAPI.post<IColorsWithImagesData>(
      `/product/${productId}/images`,
      filesFormData,
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }

  static async getAllColorsWithImages(
    productId: string,
    organizationId: string
  ): Promise<AxiosResponse<IColorsWithImagesData[]>> {
    return productServiceAPI.get<IColorsWithImagesData[]>(
      `/product/${productId}/images`,
      {
        headers: {
          'Organization-Id': organizationId,
        },
      }
    );
  }
}
