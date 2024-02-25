import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { ColorType } from '../types';

const colorTypeValues = Object.values(ColorType).filter((key) =>
  isNaN(Number(key))
);

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    color: Yup.mixed()
      .oneOf(colorTypeValues, t('products.validation.colorType'))
      .required(t('products.validation.colorRequired')),
    quantity: Yup.number()
      .min(1, t('products.validation.quantityMustBeGreaterThanZero'))
      .integer(t('products.validation.quantityInteger'))
      .required(t('products.validation.quantityRequired')),
    priceWithoutDiscount: Yup.number()
      .typeError(t('products.validation.priceWithoutDiscountNotNumber'))
      .min(
        0.01,
        t('products.validation.priceWithoutDiscountMustBeGreaterThanZero')
      )
      .required(t('products.validation.priceWithoutDiscountRequired')),
    finalPrice: Yup.number()
      .typeError(t('products.validation.finalPriceNotNumber'))
      .min(0.01, t('products.validation.finalPriceMustBeGreaterThanZero'))
      .required(t('products.validation.finalPriceRequired')),
  });
