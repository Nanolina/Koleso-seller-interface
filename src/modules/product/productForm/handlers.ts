import { unwrapResult } from '@reduxjs/toolkit';
import { NEW } from '../../../consts';
import { AppDispatch } from '../../../redux/store';
import { handleCreateProduct } from '../../../redux/thunks/product';
import { ICreateProductData, IProduct } from './types';

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
        gender: values.gender || undefined,
        sectionId: values.sectionId,
        categoryId: values.categoryId,
        subcategoryId: values.subcategoryId,
        composition: values.composition || [],
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
