import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object({
    phone: Yup.string()
      .min(10, t('auth.validation.phoneRequired'))
      .required(t('auth.validation.phoneRequired')),
  });
