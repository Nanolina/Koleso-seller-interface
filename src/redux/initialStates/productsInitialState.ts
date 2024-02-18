import { IProductsState } from '../../modules/product';

export const productInitialState = {
  id: '',
  name: '',
  description: '',
  brand: '',
  model: '',
  articleSupplier: '',
  articleKoleso: '',
  priceWithoutDiscount: 0,
  finalPrice: 0,
  gender: undefined,
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
  composition: [],
  image: '',
  imagePublicId: '',
  color: undefined,
  size: '',
  quantity: 0,
  storeId: '',
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
