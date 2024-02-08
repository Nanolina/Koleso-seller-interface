import { ColorType, GenderType, IProductsState } from '../../modules/product';

export const productInitialState = {
  id: '',
  title: '',
  description: '',
  image: '',
  imagePublicId: '',
  articleSupplier: '',
  articleKoleso: '',
  color: ColorType.White,
  size: '',
  brand: '',
  model: '',
  gender: GenderType.Female,
  composition: [],
  quantity: 0,
  priceWithoutDiscount: 0,
  finalPrice: 0,
  storeId: '',
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  loading: false,
  success: null,
  error: null,
};
