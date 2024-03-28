import { unwrapResult } from '@reduxjs/toolkit';
import { NEW } from '../../consts';
import { AppDispatch } from '../../redux/store';
import {
  handleCreateStore,
  handleRemoveStore,
  handleUpdateStore,
} from '../../redux/thunks/store';
import { initialValuesStore } from './initialValues';
import { ICreateStoreData, IStore } from './types';

export const handleSubmitFormStore = async (
  storeId: string | undefined,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateStoreData>>,
  values: ICreateStoreData,
  organizationId: string,
  navigate: any
) => {
  const formData = new FormData();
  formData.append('organizationId', organizationId);
  formData.append('name', values.name);
  formData.append('description', values.description || '');
  const image = values.image;
  if (image) {
    formData.append('image', image);
  } else {
    formData.append('isRemoveImage', 'true');
  }

  if (!storeId) {
    return;
  }

  let action: any =
    storeId === NEW
      ? handleCreateStore({ organizationId, storeFormData: formData })
      : handleUpdateStore({
          organizationId,
          id: storeId,
          storeFormData: formData,
        });
  let result = await dispatch(action);
  const storeFromDB = unwrapResult(result);

  if (storeFromDB) {
    setInitialValues(values);
    navigate(storeId === NEW ? '/stores' : -1);
  }
};

export const handleRemoveFormStore = async (
  storeId: string | undefined,
  organizationId: string,
  dispatch: AppDispatch,
  previewUrl: string | null,
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateStoreData>>,
  navigate: any
) => {
  if (storeId && storeId !== NEW) {
    const data = await dispatch(
      handleRemoveStore({ organizationId, id: storeId })
    );
    const store: IStore = unwrapResult(data);

    if (!store) {
      return;
    }

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
