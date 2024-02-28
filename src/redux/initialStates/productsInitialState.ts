import { IProductsState } from '../../modules/product/productForm';

export const productInitialState = {
  id: '',
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
  variants: [],
  colorsWithFiles: [],
  userId: '',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  loading: false,
  success: null,
  error: null,
};
