import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';
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
import { handleCreateStore } from '../../../../redux/thunks/store';
import { Button } from '../../../../ui/Button/Button';
import { mockStores } from '../../data';
import { ICreateStoreData } from '../../types';
import styles from './StoreDetailsForm.module.css';

const StoreNotFound = () => {
  const { t } = useTranslation();
  return <div>{t('stores.storeDetails.notFound')}</div>;
};

export const StoreDetailsForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.stores
  );

  const { storeId } = useParams<{ storeId: string }>();

  const store = useMemo(
    () => mockStores.find((store) => store.id === storeId),
    [storeId]
  );

  if (storeId !== 'new' && !store) {
    return <StoreNotFound />;
  }

  // Initial values
  let initialValues;
  if (storeId === 'new') {
    initialValues = {
      name: '',
      description: '',
      // logo: null,
    };
  } else {
    initialValues = {
      name: '',
      description: '',
      // logo: null,
    };
  }

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

  const handleSubmit = async (values: ICreateStoreData) => {
    const { name, description } = values;

    const storeData: ICreateStoreData = {
      name,
      description,
    };

    dispatch(handleCreateStore(storeData));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
  );
};
