import { unwrapResult } from '@reduxjs/toolkit';
import { Field, Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetStoreById } from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import {
  handleRemoveFormStore,
  handleSubmitFormStore,
  initialValuesStore,
  validationSchemaStore,
} from '../../storeFormModel';
import { ICreateStoreData, IStore } from '../../types';
import { LogoForStore } from '../LogoForStore/LogoForStore';
import styles from './StoreDetailsForm.module.css';

export const StoreDetailsForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();

  // useState
  const [isStoreFound, setIsStoreFound] = useState<boolean>(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [initialValues, setInitialValues] =
    useState<ICreateStoreData>(initialValuesStore);

  // Values from Redux
  const { store, loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      // If the correct storeId in the url
      if (storeId && storeId !== 'new') {
        // Get data of store from DB
        const data = await dispatch(handleGetStoreById(storeId));

        // Retrieve data from a completed promise
        const store: IStore = unwrapResult(data);

        // Set initial values based on the data from DB
        if (store) {
          setInitialValues({
            name: store.name,
            description: store.description || '',
            logo: store.logo,
          });

          if (store.logo) setPreviewUrl(store.logo);
        } else {
          setIsStoreFound(false);
        }
      }
    };

    fetchData();
  }, [dispatch, storeId]);

  // Clearing preview logo URL to free up resources
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

  // Early returns
  if (!isStoreFound) {
    return (
      <div className={styles.notFound}>{t('stores.storeDetails.notFound')}</div>
    );
  }

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchemaStore(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
        <Form className={styles.container}>
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

          <div className={styles.buttonContainer}>
            <Button
              text={t('save')}
              type="submit"
              disabled={!isValid || !dirty}
            />

            {storeId && storeId !== 'new' && store && (
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
