import { Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { TextareaLabel } from '../../../../../components/TextareaLabel/TextareaLabel';
import { GENDERS } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { Label } from '../../../../../ui/Label/Label';
import { IProductFormFieldsProps } from '../../types';
import { CatalogStructureSelects } from '../CatalogStructureSelects/CatalogStructureSelects';
import { AddComposition } from '../composition/AddComposition/AddComposition';
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

    const { items, loading } = useSelector((state: IRootState) => state.stores);

    const [hasStore, setHasStore] = useState<boolean>(false);
    const [hasOnlyOneStore, setHasOnlyOneStore] = useState<boolean>(false);
    const [sortedGenders, setSortedGenders] = useState<
      { name: string; value: string }[]
    >([]);

    const handleClearValues = useCallback(() => {
      localStorage.removeItem('product');
      resetForm({
        values: {
          ...initialValuesProduct,
          ...(hasStore && { storeId: items[0].id }),
        },
      });
    }, [hasStore, initialValuesProduct, items, resetForm]);

    useEffect(() => {
      items.length ? setHasStore(true) : setHasStore(false);
      if (items.length === 1) {
        setHasOnlyOneStore(true);
        setFieldValue('storeId', items[0].id);
      } else {
        setHasOnlyOneStore(false);
      }
    }, [items, setFieldValue]);

    // Translate and sort genders
    useEffect(() => {
      const translatedGenders = GENDERS.map((gender) => ({
        name: t(`products.form.gender.${gender}`),
        value: gender,
      }));
      const sortedTranslatedGenders = translatedGenders.sort((a, b) =>
        a.name.localeCompare(b.name, 'default', { numeric: true })
      );
      setSortedGenders(sortedTranslatedGenders);
    }, [t]);

    if (loading) return <Loader />;

    return (
      <>
        <FaTrashAlt className="clearValuesButton" onClick={handleClearValues} />

        <>
          {hasStore && !hasOnlyOneStore && (
            <SelectLabel
              id="storeId"
              name="storeId"
              label={t('stores.label')}
              options={items}
              value={values.storeId}
              setFieldValue={setFieldValue}
              keyInLocalStorage="product"
              firstText={t('products.form.selectStore')}
              required
            />
          )}

          {hasStore && hasOnlyOneStore && (
            <div className={styles.storeContainer}>
              <Label text={t('stores.label')} id="storeId" />
              <h3>{items[0].name}</h3>
            </div>
          )}

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
                value={values.name || ''}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                required
              />
              <Field
                as={TextareaLabel}
                label={t('products.table.description')}
                id="description"
                name="description"
                keyInLocalStorage="product"
                value={values.description || ''}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                rows={8}
              />
              <InputLabel
                label={t('products.table.brand')}
                id="brand"
                name="brand"
                keyInLocalStorage="product"
                value={values.brand || ''}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              <InputLabel
                label={t('products.table.model')}
                id="model"
                name="model"
                keyInLocalStorage="product"
                value={values.model || ''}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              <SelectLabel
                id="gender"
                name="gender"
                label={t('products.form.gender.label')}
                options={sortedGenders}
                value={values.gender || ''}
                setFieldValue={setFieldValue}
                keyInLocalStorage="product"
                firstText={t('products.form.gender.select')}
              />

              <CatalogStructureSelects
                values={values}
                setFieldValue={setFieldValue}
              />

              <AddComposition values={values} setFieldValue={setFieldValue} />
            </>
          )}
        </>
      </>
    );
  }
);
