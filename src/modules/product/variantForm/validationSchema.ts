import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { ColorType } from '../types';

const colorTypeValues = Object.values(ColorType).filter((key) =>
  isNaN(Number(key))
);

const variantValidationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    color: Yup.mixed()
      .oneOf(colorTypeValues, t('products.variants.validation.colorType'))
      .required(t('products.variants.validation.colorRequired')),
    quantity: Yup.number()
      .min(1, t('products.variants.validation.quantityMustBeGreaterThanZero'))
      .integer(t('products.variants.validation.quantityInteger'))
      .required(t('products.variants.validation.quantityRequired')),
    priceWithoutDiscount: Yup.number()
      .typeError(
        t('products.variants.validation.priceWithoutDiscountNotNumber')
      )
      .min(
        0.01,
        t(
          'products.variants.validation.priceWithoutDiscountMustBeGreaterThanZero'
        )
      )
      .required(t('products.variants.validation.priceWithoutDiscountRequired')),
    finalPrice: Yup.number()
      .typeError(t('products.variants.validation.finalPriceNotNumber'))
      .min(
        0.01,
        t('products.variants.validation.finalPriceMustBeGreaterThanZero')
      )
      .required(t('products.variants.validation.finalPriceRequired')),
  });

export const validationSchema = (t: TFunction<'translation', undefined>) =>
  Yup.object().shape({
    variants: Yup.array()
      .of(variantValidationSchema(t))
      .min(1, t('products.product.validation.atLeastOneVariant')),
  });
