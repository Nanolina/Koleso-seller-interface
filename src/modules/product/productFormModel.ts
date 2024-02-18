import { unwrapResult } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { AppDispatch } from '../../redux/store';
import { handleCreateProduct } from '../../redux/thunks/product';
import { ICreateProductData, IProduct } from './types';

export const initialValuesProduct: ICreateProductData = {
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
  image: '',
  color: undefined,
  size: '',
  quantity: 0,
  storeId: '',
};

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
      .min(0.01, t('products.validation.priceMustBeGreaterThanZero'))
      .required(t('products.validation.priceWithoutDiscountRequired')),
    finalPrice: Yup.number()
      .typeError(t('products.validation.finalPriceNotNumber'))
      .min(0.01, t('products.validation.priceMustBeGreaterThanZero'))
      .required(t('products.validation.finalPriceRequired')),
    sectionId: Yup.number()
      .min(1, t('products.validation.sectionIdRequired'))
      .required(t('products.validation.sectionIdRequired')),
  });

export const handleSubmitFormProduct = async (
  product: IProduct | null,
  productId: string | undefined,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateProductData>>,
  values: ICreateProductData,
  navigate: any
) => {
  // Get data from values
  const {
    storeId,
    name,
    description,
    brand,
    model,
    articleSupplier,
    priceWithoutDiscount,
    finalPrice,
    gender,
    sectionId,
    categoryId,
    subcategoryId,
    composition,
  } = values;

  // Add data to form data
  const productFormData = new FormData();
  productFormData.append('storeId', storeId);
  productFormData.append('name', name);
  productFormData.append('sectionId', sectionId.toString());
  if (description) productFormData.append('description', description);
  if (brand) productFormData.append('brand', brand);
  if (model) productFormData.append('model', model);
  if (articleSupplier)
    productFormData.append('articleSupplier', articleSupplier);
  if (priceWithoutDiscount)
    productFormData.append(
      'priceWithoutDiscount',
      priceWithoutDiscount.toString()
    );
  if (finalPrice) productFormData.append('finalPrice', finalPrice.toString());
  if (gender) productFormData.append('gender', gender.toString());
  if (categoryId) productFormData.append('categoryId', categoryId.toString());
  if (subcategoryId)
    productFormData.append('subcategoryId', subcategoryId.toString());
  if (composition?.length)
    productFormData.append('composition', JSON.stringify(composition));

  let data: any;
  // Create product
  if (productId === 'new') {
    data = await dispatch(handleCreateProduct(productFormData));
  }
  //   // Update product
  // } else if (product && productId) {
  //   data = await dispatch(
  //     handleUpdateProduct({ id: productId, productFormData })
  //   );
  // }

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
      image: '',
      color: values.color,
      size: values.size || '',
      quantity: values.quantity,
    });

    // Navigate
    navigate('/products');
  }
};

// export const handleRemoveFormProduct = async (
//   productId: string | undefined,
//   dispatch: AppDispatch,
//   setInitialValues: React.Dispatch<React.SetStateAction<ICreateProductData>>,
//   navigate: any
// ) => {
//   if (productId && productId !== 'new') {
//     dispatch(handleRemoveProduct(productId));

//     setInitialValues(initialValuesProduct);

//     // Navigate
//     navigate('/product/new');
//   }
// };
