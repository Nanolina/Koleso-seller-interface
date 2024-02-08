export enum ColorType {
  Aquamarine,
  Beige,
  Black,
  Blue,
  Brown,
  Cherry,
  Cream,
  Emerald,
  Fuchsia,
  Golden,
  Green,
  Grey,
  LightBlue,
  Lilac,
  Maroon,
  Olive,
  Orange,
  Pink,
  Purple,
  Raspberry,
  Red,
  Sandy,
  Silver,
  Turquoise,
  Violet,
  White,
  Yellow,
}

export enum GenderType {
  Male,
  Female,
}

interface IComposition {
  title: string;
  percentage: number;
}

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  image: string;
  imagePublicId: string;
  articleSupplier?: string;
  articleKoleso: string;
  color: ColorType;
  size?: string;
  brand?: string;
  model?: string;
  gender?: GenderType;
  composition: IComposition[];
  quantity: number;
  priceWithoutDiscount: number;
  finalPrice: number;
  storeId: string;
  userId: string;
  sectionId: number;
  categoryId: number;
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IProductDetailsFormProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
}

export interface ICreateProductData {
  name: string;
  description?: string;
  image: string;
  articleSupplier?: string;
  color: ColorType;
  size?: string;
  brand?: string;
  model?: string;
  gender?: GenderType;
  composition: IComposition[];
  quantity: number;
  priceWithoutDiscount: number;
  finalPrice: number;
  storeId: string;
  sectionId: number;
  categoryId: number;
  subcategoryId: number;
}
