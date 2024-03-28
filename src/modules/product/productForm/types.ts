import {
  FormikErrors,
  FormikHelpers,
  FormikProps,
  FormikTouched,
} from 'formik';
import { IFilterQuery, SetStateAction } from '../../../types';
import { IVariant, IVariantsState } from '../variantForm';

export enum GenderType {
  Male,
  Female,
}

export interface ICreateProductData {
  storeId: string;
  name: string;
  description?: string;
  brand?: string;
  model?: string;
  gender?: GenderType | '';
  sectionId: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
}

export interface IProduct extends ICreateProductData {
  id: string;
  userId: string;
  isActive: boolean;
  variants: IVariant[];
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateProductData {
  storeId?: string;
  name?: string;
  description?: string;
  brand?: string;
  model?: string;
  gender?: GenderType | '';
  sectionId?: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
}

export interface IProductArg {
  id: string;
  organizationId: string;
}

export interface IGetProductByIdArg extends IProductArg {
  filterVariants: IFilterQuery;
}

export interface IGetAllProductsArg {
  filter: IFilterQuery;
  organizationId: string;
}

export interface IUpdateProductArg {
  id: string;
  productValues: IUpdateProductData;
  organizationId: string;
}

export interface ICreateProductArg {
  productValues: ICreateProductData;
  organizationId: string;
}

export interface IProductFormFieldsProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
  resetForm: FormikHelpers<ICreateProductData>['resetForm'];
  initialValuesProduct: ICreateProductData;
}

export interface ICreateProductValuesProps {
  values: ICreateProductData;
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue'];
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
}

export interface IProductsState {
  items: IProduct[];
  product: IProductState;
  isProductFound: boolean;
  showDeleted: boolean;
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IProductState extends ICreateProductData {
  id: string;
  userId: string;
  isActive: boolean;
  variants: IVariantsState;
  createdAt: string;
  updatedAt: string;
}

// Catalog
export interface ICatalogItemType {
  id: number;
  name: string;
  image?: string;
}

export interface ICategoryType extends ICatalogItemType {
  subcategories?: ICatalogItemType[];
}

export interface ISectionType extends ICatalogItemType {
  categories?: ICategoryType[];
}

export interface ICatalogStructureState {
  catalogStructure: ISectionType[];
  loading: boolean;
  error: any;
}

export interface IOptions {
  categoryOptions: ICategoryType[];
  subcategoryOptions: ICatalogItemType[];
}

// Composition
export interface IComposition {
  title: string;
  percentage: number;
}

export interface IAddPercentageProps {
  materialPercentage: number;
  setMaterialPercentage: SetStateAction<number>;
  errors: FormikErrors<ICreateProductData>;
  touched: FormikTouched<ICreateProductData>;
}

export interface ICompositionProps {
  material: IComposition;
  handleRemoveCompositionElem: (title: string) => void;
}

export interface IChangeCompositionPayload {
  material: string;
  materialPercentage: number;
}
