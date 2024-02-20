import { unwrapResult } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { NEW } from '../../consts';
import { AppDispatch } from '../../redux/store';
import { handleCreateProduct } from '../../redux/thunks/product';
import { ColorType, ICreateProductData, IProduct } from './types';

export const initialValuesProduct: ICreateProductData = {
  storeId: '',
  name: '',
  description: '',
  brand: '',
  model: '',
  articleSupplier: '',
  priceWithoutDiscount: 0,
  finalPrice: 0,
  gender: undefined,
  sectionId: 0,
  categoryId: undefined,
  subcategoryId: undefined,
  composition: [],
  parameters: [],
  colorWithImages: [],
};

const colorTypeValues = Object.values(ColorType).filter((key) =>
  isNaN(Number(key))
);

const validationSchemaParameters = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    color: Yup.mixed()
      .oneOf(colorTypeValues, t('products.validation.colorType'))
      .required(t('products.validation.colorRequired')),
    quantity: Yup.number()
      .min(1, t('products.validation.quantityMustBeGreaterThanZero'))
      .integer(t('products.validation.quantityInteger'))
      .required(t('products.validation.quantityRequired')),
  });

export const validationSchemaProduct = (
  t: TFunction<'translation', undefined>
) =>
  Yup.object().shape({
    storeId: Yup.string()
      .uuid()
      .required(t('products.validation.storeIdRequired')),
    name: Yup.string().required(t('products.validation.nameRequired')),
    priceWithoutDiscount: Yup.number()
      .typeError(t('products.validation.priceWithoutDiscountNotNumber'))
      .min(
        0.01,
        t('products.validation.priceWithoutDiscountMustBeGreaterThanZero')
      )
      .required(t('products.validation.priceWithoutDiscountRequired')),
    finalPrice: Yup.number()
      .typeError(t('products.validation.finalPriceNotNumber'))
      .min(0.01, t('products.validation.finalPriceMustBeGreaterThanZero'))
      .required(t('products.validation.finalPriceRequired')),
    sectionId: Yup.number()
      .min(1, t('products.validation.sectionIdRequired'))
      .required(t('products.validation.sectionIdRequired')),
    parameters: Yup.array()
      .of(validationSchemaParameters(t))
      .min(1, t('products.validation.atLeastOneParameter')),
  });

export const handleSubmitFormProduct = async (
  product: IProduct | null,
  productId: string | undefined,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateProductData>>,
  values: ICreateProductData,
  navigate: any
) => {
  let data: any;
  // Create product
  if (productId === NEW) {
    data = await dispatch(handleCreateProduct(values));

    // Get data from DB
    const productFromDB: IProduct = unwrapResult(data);

    // Set initial values
    if (productFromDB) {
      setInitialValues({
        storeId: values.storeId,
        name: values.name,
        description: values.description || '',
        brand: values.brand || '',
        model: values.model || '',
        articleSupplier: values.articleSupplier || '',
        priceWithoutDiscount: values.priceWithoutDiscount,
        finalPrice: values.finalPrice,
        gender: values.gender || undefined,
        sectionId: values.sectionId,
        categoryId: values.categoryId || undefined,
        subcategoryId: values.subcategoryId || undefined,
        composition: values.composition || [],
        parameters: values.parameters,
        colorWithImages: values.colorWithImages,
      });
    }
  }
  //   // Update product
  // } else if (product && productId) {
  //   data = await dispatch(
  //     handleUpdateProduct({ id: productId, productFormData })
  //   );
  // }

  // Navigate
  navigate('/products');
};

// export const handleRemoveFormProduct = async (
//   productId: string | undefined,
//   dispatch: AppDispatch,
//   setInitialValues: React.Dispatch<React.SetStateAction<ICreateProductData>>,
//   navigate: any
// ) => {
//   if (productId && productId !== NEW) {
//     dispatch(handleRemoveProduct(productId));

//     setInitialValues(initialValuesProduct);

//     // Navigate
//     navigate('/product/new');
//   }
// };
