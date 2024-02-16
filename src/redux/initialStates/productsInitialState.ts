import { ColorType, IProductsState } from '../../modules/product';

export const productInitialState = {
  id: '',
  name: '',
  description: '',
  image: '',
  imagePublicId: '',
  articleSupplier: '',
  articleKoleso: '',
  priceWithoutDiscount: 0,
  finalPrice: 0,
  gender: undefined,
  color: ColorType.White,
  size: '',
  brand: '',
  model: '',
  composition: [],
  quantity: 0,
  storeId: '',
  userId: '',
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
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
