import { Field } from 'formik';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IStoreFormFieldsProps } from '../../types';
import { LogoForStore } from '../LogoForStore/LogoForStore';
import styles from './StoreFormFields.module.css';

export const StoreFormFields: React.FC<IStoreFormFieldsProps> = React.memo(
  ({
    values,
    setFieldValue,
    errors,
    touched,
    resetForm,
    initialValuesStore,
    previewUrl,
    setPreviewUrl,
  }) => {
    const { t } = useTranslation();

    const handleClick = useCallback(() => {
      localStorage.removeItem('store');
      resetForm({ values: { ...initialValuesStore } });
    }, [initialValuesStore, resetForm]);

    return (
      <>
        <FaTrashAlt
          className={styles.clearLocalStorageButton}
          onClick={handleClick}
        />

        <div className={styles.container}>
          <InputLabel
            label={t('stores.table.name')}
            id="name"
            name="name"
            keyInLocalStorage="store"
            value={values.name}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />
          <Field
            as={TextareaLabel}
            label={t('stores.table.description')}
            id="description"
            name="description"
            keyInLocalStorage="store"
            value={values.description}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            rows={4}
          />

          <LogoForStore
            setFieldValue={setFieldValue}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />
        </div>
      </>
    );
  }
);
