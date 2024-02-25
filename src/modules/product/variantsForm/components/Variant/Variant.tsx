import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { SIZES } from '../../../../../consts';
import { IVariantProps } from '../../types';
import styles from './Variant.module.css';
import useVariants from '../../useVariants';

export const Variant: React.FC<IVariantProps> = React.memo(
  ({ variant, values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();

    const { handleUpdateVariant, handleRemoveVariant, handleCopyVariant } =
      useVariants(values.variants, setFieldValue);

    // Quantity
    const handleQuantityUpdate = (quantityValue: string) => {
      handleUpdateVariant(
        variant.id,
        'quantity',
        quantityValue === '' ? '' : parseInt(quantityValue, 10) || ''
      );
    };

    // Size
    const handleSizeUpdate = (sizeValue: string) => {
      handleUpdateVariant(variant.id, 'size', sizeValue);
    };

    // Price
    const handlePriceWithoutDiscountUpdate = (priceValue: string) => {
      handleUpdateVariant(
        variant.id,
        'priceWithoutDiscount',
        priceValue === '' ? '' : parseFloat(priceValue) || ''
      );
    };

    const handleFinalPriceUpdate = (priceValue: string) => {
      handleUpdateVariant(
        variant.id,
        'finalPrice',
        priceValue === '' ? '' : parseFloat(priceValue) || ''
      );
    };

    // Article supplier
    const handleArticleSupplierUpdate = (articleValue: string) => {
      handleUpdateVariant(variant.id, 'articleSupplier', articleValue);
    };

    return (
      <div className={styles.container}>
        <h3>{t(`products.form.color.${variant.color}`)}</h3>
        <div className={styles.row}>
          <div className={styles.variant}>
            <InputLabel
              label={t('products.form.variants.quantity')}
              id={`${variant.quantity}-${variant.id}`}
              name="quantity"
              inputType="number"
              value={variant.quantity}
              onChange={handleQuantityUpdate}
              errors={errors}
              touched={touched}
              required
            />
          </div>

          <div className={styles.variant}>
            <SelectLabel
              label={t('products.form.variants.size')}
              id={`${variant.size}-${variant.id}`}
              name="size"
              options={SIZES}
              value={variant.size}
              onChange={handleSizeUpdate}
              firstText={t('products.form.size.select')}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.variant}>
            <InputLabel
              label={t('products.table.priceWithoutDiscount')}
              id={`${variant.priceWithoutDiscount}-${variant.id}`}
              name="priceWithoutDiscount"
              inputType="number"
              value={variant.priceWithoutDiscount}
              onChange={handlePriceWithoutDiscountUpdate}
              extraText={t('products.form.price.oldPriceExtra')}
              errors={errors}
              touched={touched}
              required
            />
          </div>

          <div className={styles.variant}>
            <InputLabel
              label={t('products.table.finalPrice')}
              id={`${variant.finalPrice}-${variant.id}`}
              name="finalPrice"
              inputType="number"
              value={variant.finalPrice}
              onChange={handleFinalPriceUpdate}
              extraText={t('products.form.price.priceExtra')}
              errors={errors}
              touched={touched}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.article}>
            <InputLabel
              label={t('products.table.articleSupplier')}
              id="articleSupplier"
              name="articleSupplier"
              value={variant.articleSupplier}
              onChange={handleArticleSupplierUpdate}
              errors={errors}
              touched={touched}
              extraText={t('products.form.extraTextArticleSupplier')}
            />
          </div>
        </div>

        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={() => handleRemoveVariant(variant.id)}
          className={styles.iconRemove}
        />
        <MdContentCopy
          color="var(--dark-gray)"
          onClick={() => handleCopyVariant(variant.id)}
          className={styles.iconCopy}
        />
      </div>
    );
  }
);
