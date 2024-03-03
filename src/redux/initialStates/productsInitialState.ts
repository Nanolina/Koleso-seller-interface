import { IProductsState } from '../../modules/product/productForm';

const variantsInitialState = {
  items: [],
  loading: false,
  success: null,
  error: null,
};

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
  variants: variantsInitialState,
  colorsWithImages: [],
  userId: '',
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  isProductFound: true,
  showDeleted: false,
  loading: false,
  success: null,
  error: null,
};
