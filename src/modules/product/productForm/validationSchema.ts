import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    storeId: Yup.string()
      .uuid()
      .required(t('products.product.validation.storeIdRequired')),
    name: Yup.string().required(t('products.product.validation.nameRequired')),
    sectionId: Yup.number()
      .min(1, t('products.product.validation.sectionIdRequired'))
      .required(t('products.product.validation.sectionIdRequired')),
  });
