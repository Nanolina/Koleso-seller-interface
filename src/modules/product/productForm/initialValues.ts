import { ICreateProductData, IProduct } from './types';

export const initialValuesProduct: ICreateProductData = {
  storeId: '',
  name: '',
  description: '',
  brand: '',
  model: '',
  gender: undefined,
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
  composition: [],
};

export const mapProductToInitialValues = (product: IProduct) => ({
  storeId: product.storeId,
  name: product.name,
  description: product.description,
  brand: product.brand,
  model: product.model,
  gender: product.gender,
  sectionId: product.sectionId,
  categoryId: product.categoryId,
  subcategoryId: product.subcategoryId,
  composition: product.composition,
});
