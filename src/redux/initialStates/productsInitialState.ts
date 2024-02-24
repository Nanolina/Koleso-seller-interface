import { ColorType, IProductsState } from '../../modules/product';

export const productInitialState = {
  id: '',
  storeId: '',
  name: '',
  description: '',
  brand: '',
  model: '',
  // articleSupplier: '',
  // articleKoleso: '',
  // priceWithoutDiscount: 0,
  // finalPrice: 0,
  gender: undefined,
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
  composition: [],
  variants: [],
  // colorWithImages: [],
  // color: ColorType.White,
  // size: '',
  // quantity: 0,
  // images: [],
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
