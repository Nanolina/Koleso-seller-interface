import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object({
    email: Yup.string()
      .email(t('auth.validation.invalidEmail'))
      .required(t('auth.validation.emailRequired')),
  });
