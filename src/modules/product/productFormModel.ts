import { unwrapResult } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { AppDispatch } from '../../redux/store';
import { handleCreateProduct } from '../../redux/thunks/product';
import { ColorType, GenderType, ICreateProductData, IProduct } from './types';

export const initialValuesProduct: ICreateProductData = {
  name: '',
  description: '',
  image: '',
  articleSupplier: '',
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
};

export const validationSchemaProduct = (
  t: TFunction<'translation', undefined>
) => Yup.object().shape({});

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
    name,
    description,
    brand,
    model,
    articleSupplier,
    priceWithoutDiscount,
    finalPrice,
  } = values;
  console.log('name', name)

  // Add data to form data
  const productFormData = new FormData();
  productFormData.append('name', name);
  if (brand) productFormData.append('brand', brand);
  if (model) productFormData.append('model', model);
  if (articleSupplier)
    productFormData.append('articleSupplier', articleSupplier);
  if (description) productFormData.append('description', description);
  // if (priceWithoutDiscount) productFormData.append('priceWithoutDiscount', priceWithoutDiscount);
  // if (finalPrice) productFormData.append('finalPrice', finalPrice);


  let data: any;
  // Create product
  if (productId === 'new') {
    // or try values
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
      name: values.name,
      description: values.description || '',
      image: '',
      articleSupplier: values.name,
      color: values.color,
      size: values.size || '',
      brand: values.brand || '',
      model: values.model || '',
      gender: values.gender || GenderType.Female,
      composition: values.composition || [],
      quantity: values.quantity,
      priceWithoutDiscount: values.priceWithoutDiscount,
      finalPrice: values.finalPrice,
      storeId: values.storeId,
      sectionId: values.sectionId,
      categoryId: values.categoryId || 0,
      subcategoryId: values.subcategoryId || 0,
    });

    // Navigate
    navigate(`/product/${productFromDB.id}`);
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
