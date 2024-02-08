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
  title: string;
  description?: string;
  image: string;
  imagePublicId?: string; // only from DB
  articleSupplier?: string;
  articleKoleso?: string; // only from DB
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
  userId?: string; // only from DB
  sectionId: number;
  categoryId: number;
  subcategoryId: number;
  createdAt: Date;
  updatedAt: Date;
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
