import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetAllStores } from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import { Modal } from '../../../modal/Modal/Modal';
import {
  handleSubmitFormStore,
  initialValuesStore,
  validationSchemaStore,
} from '../../storeFormModel';
import { ICreateStoreData, IStore, IStoreDetailsFormProps } from '../../types';
import { Logo } from '../Logo/Logo';
import styles from './StoreDetailsForm.module.css';

export const StoreDetailsForm: React.FC<IStoreDetailsFormProps> = ({
  modalOpen,
  handleCloseModal,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { storeId } = useParams<{ storeId: string }>();

  // useState
  const [store, setStore] = useState<IStore | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [initialValues, setInitialValues] =
    useState<ICreateStoreData>(initialValuesStore);

  // Values from Redux
  const { items, loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );

  // useEffect
  useEffect(() => {
    if (storeId && storeId !== 'new') {
      const existingStore = items.find((item) => item.id === storeId);
      if (existingStore) {
        setStore(existingStore);
        setInitialValues({
          name: existingStore.name,
          description: existingStore.description || '',
          logo: existingStore.logo,
        });

        if (existingStore.logo) setPreviewUrl(existingStore.logo);
      }
    }
  }, [dispatch, storeId, items]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    dispatch(handleGetAllStores());
  }, [dispatch]);

  // Early return
  if (!store && storeId !== 'new') {
    return (
      <div className={styles.notFound}>{t('stores.storeDetails.notFound')}</div>
    );
  }

  if (loading)
    return (
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <Loader />
      </Modal>
    );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchemaStore(t)}
      onSubmit={(values) =>
        handleSubmitFormStore(
          store,
          storeId,
          dispatch,
          setInitialValues,
          values
        )
      }
      enableReinitialize
    >
      {({ errors, touched, setFieldValue, isValid, dirty }) => (
        <Form className={styles.container}>
          <InputLabel
            label={t('stores.table.name')}
            id="name"
            name="name"
            errors={errors}
            touched={touched}
            required
          />
          <Field
            as={TextareaLabel}
            label={t('stores.table.description')}
            id="description"
            name="description"
            errors={errors}
            touched={touched}
            rows={4}
          />

          <Logo
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
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
