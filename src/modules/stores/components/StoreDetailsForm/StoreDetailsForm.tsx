import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleCreateStore,
  handleGetStoreById,
  handleUpdateStore,
} from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import { ICreateStoreData, IStore } from '../../types';
import styles from './StoreDetailsForm.module.css';

const StoreNotFound = () => {
  const { t } = useTranslation();
  return <div>{t('stores.storeDetails.notFound')}</div>;
};

export const StoreDetailsForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  // Params
  const { storeId } = useParams<{ storeId: string }>();

  // useState
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
  });
  const [store, setStore] = useState<IStore>({
    id: '',
    name: '',
    description: '',
    // logo: '',
  });

  // useSelector
  const { loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );

  // const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | null>(null);

  // Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('settings.store.validation.nameRequired')),
    description: Yup.string(),
    // logo:
  });

  // useEffect(() => {
  //   if (logo) {
  //     const newLogoPreviewUrl = URL.createObjectURL(logo);
  //     setLogoPreviewUrl(newLogoPreviewUrl);

  //     return () => {
  //       URL.revokeObjectURL(newLogoPreviewUrl);
  //     };
  //   }
  // }, [logo]);

  // const handleLogoChange = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   setFieldValue: FormikHelpers<StoreFormValues>['setFieldValue']
  // ) => {
  //   const file = event.target.files ? event.target.files[0] : null;
  //   setFieldValue('logo', file);
  // };

  // Submit form
  const handleSubmit = async (values: ICreateStoreData) => {
    const { name, description } = values;

    const storeData: ICreateStoreData = {
      name,
      description,
    };

    if (!store && storeId === 'new') {
      dispatch(handleCreateStore(storeData));
    } else if (store && storeId) {
      dispatch(handleUpdateStore({ id: storeId, ...storeData }));
    }
  };

  // useEffect
  useEffect(() => {
    if (storeId) {
      dispatch(handleGetStoreById(storeId))
        .then((response) => {
          const storeFromDB = response.payload as IStore;
          if (storeFromDB) {
            setStore(storeFromDB);
          }
        })
        .catch((error) => {
          return <MessageBox errorMessage={error} />;
        });
    }
  }, [dispatch, storeId]);

  useEffect(() => {
    if (store && storeId !== 'new') {
      setInitialValues({
        name: store.name,
        description: store.description || '',
        // logo: store.logo || null,
      });
    }
  }, [store, storeId]);

  // Early return
  if (!storeId) {
    return <StoreNotFound />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && (
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
              {/* <InputUploadLabel
              label={t('stores.table.logo')}
              id="logo"
              name="logo"
              onChange={(event) => handleLogoChange(event, setFieldValue)}
              acceptFiles="image/*"
            /> */}

              {/* {values.logo && (
              <div className={styles.photo}>
                <PhotoPreview
                  photo={URL.createObjectURL(values.logo)}
                  onRemove={() => setFieldValue('logo', null)}
                />
              </div>
            )} */}
              <div className={styles.buttonContainer}>
                <Button
                  text={t('send')}
                  type="submit"
                  disabled={!isValid || !dirty}
                />
              </div>

              {error && <MessageBox errorMessage={error} />}
              {success && <MessageBox successMessage={success} />}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
