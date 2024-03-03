import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    name: Yup.string().required(t('stores.validation.nameRequired')),
    description: Yup.string(),
  });
