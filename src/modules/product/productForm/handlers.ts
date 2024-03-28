import { unwrapResult } from '@reduxjs/toolkit';
import { FormikProps } from 'formik';
import { NEW } from '../../../consts';
import { AppDispatch } from '../../../redux/store';
import {
  handleCreateProduct,
  handleUpdateProduct,
} from '../../../redux/thunks/product';
import { ICreateProductData, IProduct } from './types';

export const handleSubmitFormProduct = async (
  productId: string | undefined,
  organizationId: string,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateProductData>>,
  values: ICreateProductData,
  navigate: any
) => {
  let data: any;
  // Create product
  if (productId === NEW) {
    data = await dispatch(
      handleCreateProduct({ organizationId, productValues: values })
    );

    // Get data from DB
    const product: IProduct = unwrapResult(data);

    // Set initial values
    if (product) {
      setInitialValues({
        storeId: values.storeId,
        name: values.name,
        description: values.description || '',
        brand: values.brand || '',
        model: values.model || '',
        gender: values.gender || '',
        sectionId: values.sectionId,
        categoryId: values.categoryId,
        subcategoryId: values.subcategoryId,
        composition: values.composition || [],
      });

      navigate(`/product/${product.id}/product`);
    }

    // Update product
  } else if (productId) {
    data = await dispatch(
      handleUpdateProduct({
        organizationId,
        id: productId,
        productValues: values,
      })
    );

    // Get data from DB
    const product: IProduct = unwrapResult(data);

    // Set initial values
    if (product) {
      setInitialValues({
        storeId: values.storeId,
        name: values.name,
        description: values.description,
        brand: values.brand,
        model: values.model,
        gender: values.gender,
        sectionId: values.sectionId,
        categoryId: values.categoryId,
        subcategoryId: values.subcategoryId,
        composition: values.composition,
      });
    }
  }
};

export const addCompositionToValues = (
  material: string,
  materialPercentage: number,
  values: ICreateProductData,
  setFieldValue: FormikProps<ICreateProductData>['setFieldValue']
) => {
  const currentComposition = values.composition || [];

  if (currentComposition.some((comp) => comp.title === material)) {
    return;
  }

  const newComposition = [
    ...currentComposition,
    { title: material, percentage: materialPercentage },
  ];

  // Update the composition in Formik
  setFieldValue('composition', newComposition);

  // Update the composition in localStorage
  const currentData = JSON.parse(localStorage.getItem('product') || '{}');
  currentData['composition'] = newComposition;
  localStorage.setItem('product', JSON.stringify(currentData));
};
