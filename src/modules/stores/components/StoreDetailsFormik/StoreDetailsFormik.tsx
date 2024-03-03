import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetStoreById } from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import { handleRemoveFormStore, handleSubmitFormStore } from '../../handlers';
import { initialValuesStore } from '../../initialValues';
import { ICreateStoreData, IStore } from '../../types';
import { validationSchema } from '../../validationSchema';
import { StoreFormFields } from '../StoreFormFields/StoreFormFields';
import styles from './StoreDetailsFormik.module.css';

export const StoreDetailsFormik: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();

  const savedStore = JSON.parse(localStorage.getItem('store') || '{}');

  // useState
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<ICreateStoreData>({
    ...initialValuesStore,
    ...savedStore,
  });

  // Values from Redux
  const { store, loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      // If the correct storeId in the url
      if (storeId && storeId !== NEW) {
        // Get data of store from DB
        const data = await dispatch(handleGetStoreById(storeId));

        // Retrieve data from a completed promise
        const store: IStore = unwrapResult(data);

        // Set initial values based on the data from DB
        if (store) {
          const image = store.image?.url;
          setInitialValues({
            image,
            name: store.name,
            description: store.description || '',
          });

          if (image) setPreviewUrl(image);
        }
      }
    };

    fetchData();
  }, [dispatch, storeId]);

  // Clearing preview image URL to free up resources
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Submit data
  const handleSubmit = useCallback(
    (values: ICreateStoreData) => {
      handleSubmitFormStore(
        store,
        storeId,
        dispatch,
        setInitialValues,
        values,
        navigate
      );
    },
    [store, storeId, dispatch, navigate]
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        isValid,
        dirty,
        resetForm,
      }) => (
        <Form className={styles.container}>
          <StoreFormFields
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            resetForm={resetForm}
            initialValuesStore={initialValuesStore}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />

          <div className="buttonSaveItemContainer">
            <Button text={t('save')} type="submit" disabled={!isValid} />

            {storeId && storeId !== NEW && store && (
              <span
                className="removeText"
                onClick={() =>
                  handleRemoveFormStore(
                    storeId,
                    dispatch,
                    previewUrl,
                    setPreviewUrl,
                    setInitialValues,
                    navigate
                  )
                }
              >
                {t('stores.storeDetails.removeStore')}
              </span>
            )}
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
