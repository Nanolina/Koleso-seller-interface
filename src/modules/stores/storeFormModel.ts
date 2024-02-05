import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { handleCreateStore, handleUpdateStore } from '../../redux/thunks/store';
import { AppDispatch } from './../../redux/store';
import { ICreateStoreData, IStore } from './types';

export const initialValuesStore: ICreateStoreData = {
  name: '',
  description: '',
  logo: '',
};

export const validationSchemaStore = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    name: Yup.string().required(t('stores.validation.nameRequired')),
    description: Yup.string(),
    logo: Yup.mixed()
      .nullable()
      .test('fileType', t('stores.validation.formatLogo'), (value) => {
        const file = value as File;
        return (
          !file || (file && ['image/jpeg', 'image/png'].includes(file.type))
        );
      })
      .test('fileSize', t('stores.validation.sizeLogo'), (value) => {
        const file = value as File;
        return !file || (file && file.size <= 512000); // Size <= 500KB
      }),
  });

export const handleSubmitFormStore = async (
  store: IStore | null,
  storeId: string | undefined,
  dispatch: AppDispatch,
  setInitialValues: React.Dispatch<React.SetStateAction<ICreateStoreData>>,
  values: ICreateStoreData
) => {
  const { name, description, logo } = values;

  const storeFormData = new FormData();
  storeFormData.append('name', name);
  if (description) storeFormData.append('description', description);
  if (logo) storeFormData.append('logo', logo);

  let action;
  if (storeId === 'new') {
    action = dispatch(handleCreateStore(storeFormData));
  } else if (store && storeId) {
    action = dispatch(handleUpdateStore({ id: storeId, storeFormData }));
  }

  if (action) {
    action
      .then(() => {
        setInitialValues({
          name: values.name,
          description: values.description || '',
          logo: values.logo,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
