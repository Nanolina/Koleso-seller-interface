import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleCreateStore,
  handleUpdateStore,
} from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import { Modal } from '../../../modal/Modal/Modal';
import { ICreateStoreData, IStore } from '../../types';
import styles from './StoreDetailsForm.module.css';

const StoreNotFound = () => {
  const { t } = useTranslation();
  return <div>{t('stores.storeDetails.notFound')}</div>;
};

export const StoreDetailsForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // useState
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [store, setStore] = useState<IStore>({
    id: '',
    name: '',
    description: '',
  });

  // Initial values
  const [initialValues, setInitialValues] = useState<ICreateStoreData>({
    name: '',
    description: '',
  });

  // Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('stores.validation.nameRequired')),
    description: Yup.string(),
  });

  // Params
  const { storeId } = useParams<{ storeId: string }>();

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
        });
      }
    }
  }, [dispatch, storeId, items]);

  // Submit form
  const handleSubmit = async (values: ICreateStoreData) => {
    const { name, description } = values;
    const storeData: ICreateStoreData = { name, description };

    let action;
    if (storeId === 'new') {
      action = dispatch(handleCreateStore(storeData));
    } else if (store && storeId) {
      action = dispatch(handleUpdateStore({ id: storeId, ...storeData }));
    }

    if (action) {
      action
        .then(() => {
          setInitialValues({
            name: values.name,
            description: values.description || '',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
    navigate('/stores');
  };

  // Early return
  if (!storeId) return <StoreNotFound />;
  if (loading)
    return (
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <Loader />
      </Modal>
    );

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
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
    </Modal>
  );
};
