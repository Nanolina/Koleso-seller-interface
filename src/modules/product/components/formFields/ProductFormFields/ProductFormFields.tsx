import { Field } from 'formik';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { TextareaLabel } from '../../../../../components/TextareaLabel/TextareaLabel';
import { IProductFormFieldsProps } from '../../../types';
import styles from './ProductFormFields.module.css';

export const ProductFormFields: React.FC<IProductFormFieldsProps> = React.memo(
  ({
    values,
    setFieldValue,
    errors,
    touched,
    resetForm,
    initialValuesProduct,
  }) => {
    const { t } = useTranslation();

    const handleClick = useCallback(() => {
      localStorage.removeItem('product');
      resetForm({ values: { ...initialValuesProduct } });
    }, [initialValuesProduct, resetForm]);

    return (
      <>
        <FaTrashAlt
          className={styles.clearLocalStorageButton}
          onClick={handleClick}
        />

        <div>
          <InputLabel
            label={t('products.table.name')}
            id="name"
            name="name"
            keyInLocalStorage="product"
            value={values.name}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />

          {/* <CatalogSelects /> */}
          <InputLabel
            label={t('products.table.brand')}
            id="brand"
            name="brand"
            keyInLocalStorage="product"
            value={values.brand}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
          <InputLabel
            label={t('products.table.model')}
            id="model"
            name="model"
            keyInLocalStorage="product"
            value={values.model}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
          <InputLabel
            label={t('products.table.articleSupplier')}
            id="articleSupplier"
            name="articleSupplier"
            keyInLocalStorage="product"
            value={values.articleSupplier}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            extraText={t('products.form.extraTextArticleSupplier')}
          />

          {/* <SelectLabel
        id="gender"
        name="gender"
        label={t('products.form.gender.label')}
        options={GENDERS}
        onChange={handleChange('gender')}
        value={gender}
        firstText={t('products.form.gender.select')}
        translationType="products.form.gender"
      />
      <AddComposition />
      <AddParameters /> */}
          <Field
            as={TextareaLabel}
            label={t('products.table.description')}
            id="description"
            name="description"
            keyInLocalStorage="product"
            value={values.description}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            rows={8}
          />

          {/* <PhotoUpload /> */}
          <InputLabel
            label={t('products.table.priceWithoutDiscount')}
            id="priceWithoutDiscount"
            name="priceWithoutDiscount"
            keyInLocalStorage="product"
            value={values.priceWithoutDiscount}
            setFieldValue={setFieldValue}
            extraText={t('products.form.price.oldPriceExtra')}
            errors={errors}
            touched={touched}
            placeholder="0"
            required
          />

          <InputLabel
            label={t('products.table.finalPrice')}
            id="finalPrice"
            name="finalPrice"
            keyInLocalStorage="product"
            value={values.finalPrice}
            setFieldValue={setFieldValue}
            extraText={t('products.form.price.priceExtra')}
            errors={errors}
            touched={touched}
            placeholder="0"
            required
          />
        </div>
      </>
    );
  }
);
