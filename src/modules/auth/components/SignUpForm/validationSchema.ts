import { TFunction } from 'i18next';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object({
    phone: Yup.string()
      .min(10, t('auth.validation.phoneRequired'))
      .required(t('auth.validation.phoneRequired')),
    email: Yup.string()
      .email(t('auth.validation.invalidEmail'))
      .required(t('auth.validation.emailRequired')),
    password: Yup.string()
      .min(8, t('auth.validation.passwordMin'))
      .minLowercase(1, t('auth.validation.passwordLowerCase'))
      .minUppercase(1, t('auth.validation.passwordUpperCase'))
      .minNumbers(1, t('auth.validation.passwordNumbers'))
      .minSymbols(1, t('auth.validation.passwordSymbols'))
      .required(t('auth.validation.passwordRequired')),
    repeatedPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('auth.validation.passwordsMustMatch'))
      .required(t('auth.validation.passwordRequired')),
  });
