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
import { RemoveItemModal } from '../../../modal';
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

  // Params
  const { storeId } = useParams<{ storeId: string }>();

  // Redux
  const { store, loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );
  const { organizationId } = useSelector((state: IRootState) => state.user);

  // Local storage
  const savedStore = JSON.parse(localStorage.getItem('store') || '{}');

  // useState
  const [modalOpen, setModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<ICreateStoreData>({
    ...initialValuesStore,
    ...savedStore,
  });

  // Get store by id
  const fetchData = useCallback(async () => {
    if (storeId && storeId !== NEW) {
      const data = await dispatch(
        handleGetStoreById({ organizationId, id: storeId })
      );
      const resultStore: IStore = unwrapResult(data);
      if (resultStore) {
        setInitialValues((prev) => ({ ...prev, ...resultStore }));
        if (resultStore.image?.url) setPreviewUrl(resultStore.image.url);
      }
    }
  }, [storeId, dispatch, organizationId]);

  // useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Clearing preview image URL to free up resources
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Submit data
  const onSubmit = useCallback(
    (values: ICreateStoreData) => {
      handleSubmitFormStore(
        storeId,
        dispatch,
        setInitialValues,
        values,
        organizationId,
        navigate
      );
    },
    [storeId, dispatch, organizationId, navigate]
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, setFieldValue, isValid, resetForm }) => (
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
              <span className="removeText" onClick={() => setModalOpen(true)}>
                {t('stores.remove')}
              </span>
            )}
          </div>

          <RemoveItemModal
            text={t('stores.modal.removeText')}
            extraText={t('stores.modal.removeExtraText')}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onRemove={() =>
              handleRemoveFormStore(
                storeId,
                organizationId,
                dispatch,
                previewUrl,
                setPreviewUrl,
                setInitialValues,
                navigate
              )
            }
          />

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
