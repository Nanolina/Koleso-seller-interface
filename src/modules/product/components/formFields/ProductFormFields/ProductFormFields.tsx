import { Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { TextareaLabel } from '../../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleGetAllStores } from '../../../../../redux/thunks/store';
import { IProductFormFieldsProps } from '../../../types';

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
    const dispatch = useDispatch<AppDispatch>();

    const { items, loading } = useSelector((state: IRootState) => state.stores);

    const [hasStore, setHasStore] = useState<boolean>(false);

    const handleClick = useCallback(() => {
      localStorage.removeItem('product');
      resetForm({ values: { ...initialValuesProduct } });
    }, [initialValuesProduct, resetForm]);

    useEffect(() => {
      dispatch(handleGetAllStores());
    }, [dispatch]);

    useEffect(() => {
      items.length ? setHasStore(true) : setHasStore(false);
    }, [items]);

    if (loading) return <Loader />;

    return (
      <>
        <FaTrashAlt className="clearLocalStorageButton" onClick={handleClick} />

        <div className="formFieldsContainer">
          <SelectLabel
            id="storeId"
            name="storeId"
            label={t('stores.label')}
            options={items}
            value={values.storeId}
            setFieldValue={setFieldValue}
            keyInLocalStorage="product"
            firstText={items[0]?.name || ''}
          />

          {!hasStore && (
            <p>
              {t('products.productDetails.go')}{' '}
              <Link to="/store/new">
                {t('products.productDetails.myStores')}
              </Link>{' '}
              {t('products.productDetails.addAtLeastStore')}
            </p>
          )}

          {hasStore && (
            <>
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
            </>
          )}
        </div>
      </>
    );
  }
);
