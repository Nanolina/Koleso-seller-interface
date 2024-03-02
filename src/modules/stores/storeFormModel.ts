import { unwrapResult } from '@reduxjs/toolkit';
import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { NEW } from '../../consts';
import {
  handleCreateStore,
  handleRemoveStore,
  handleUpdateStore,
} from '../../redux/thunks/store';
import { AppDispatch } from './../../redux/store';
import { ICreateStoreData, IStore } from './types';

export const initialValuesStore: ICreateStoreData = {
  name: '',
  description: '',
  image: '',
};

export const validationSchemaStore = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    name: Yup.string().required(t('stores.validation.nameRequired')),
    description: Yup.string(),
  });

export const handleSubmitFormStore = async (
  store: IStore | null,
  storeId: string | undefined,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateStoreData>>,
  values: ICreateStoreData,
  navigate: any
) => {
  // Get data from values
  const { name, description, image } = values;

  // Add data to form data
  const storeFormData = new FormData();
  storeFormData.append('name', name);
  if (description) storeFormData.append('description', description);
  if (image) {
    storeFormData.append('image', image);
  } else {
    storeFormData.append('isRemoveImage', 'true');
  }

  let data: any;
  // Create store
  if (storeId === NEW) {
    data = await dispatch(handleCreateStore(storeFormData));

    // Update store
  } else if (store && storeId) {
    data = await dispatch(
      handleUpdateStore({
        id: storeId,
        storeFormData,
      })
    );
  }

  // Get data from DB
  const storeFromDB: IStore = unwrapResult(data);

  // Set initial values
  if (storeFromDB) {
    setInitialValues({
      name: values.name,
      description: values.description || '',
      image: values.image,
    });

    // Navigate
    navigate(-1);
  }
};

export const handleRemoveFormStore = async (
  storeId: string | undefined,
  dispatch: AppDispatch,
  previewUrl: string | null,
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateStoreData>>,
  navigate: any
) => {
  if (storeId && storeId !== NEW) {
    dispatch(handleRemoveStore(storeId));

    setInitialValues(initialValuesStore);

    // Clearing preview image URL to free up resources
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }

    // Navigate
    navigate('/stores');
  }
};
