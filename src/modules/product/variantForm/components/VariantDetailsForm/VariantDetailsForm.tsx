import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { handleSubmitFormVariants } from '../../handlers';
import { initialValuesVariant } from '../../initialValues';
import { ICreateVariantsData } from '../../types';
import { validationSchema } from '../../validationSchema';
import { AddVariants } from '../AddVariants/AddVariants';

export const VariantDetailsForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const savedVariants = JSON.parse(localStorage.getItem('variants') || '[]');

  const [initialValues, setInitialValues] = useState<ICreateVariantsData>({
    ...initialValuesVariant,
    ...savedVariants,
  });

  // Values from Redux
  const { variants, loading, error, success } = useSelector(
    (state: IRootState) => state.variants
  );

  // Submit data
  const handleSubmit = useCallback(
    (values: ICreateVariantsData) => {
      if (!productId) {
        return;
      }

      handleSubmitFormVariants(
        productId,
        dispatch,
        setInitialValues,
        values,
        navigate
      );
    },
    [productId, dispatch, navigate]
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, setFieldValue, isValid }) => (
        <Form className="formFieldsContainer">
          <div className="formSaveButton">
            <Button
              text={t('save')}
              isBold={false}
              disabled={!isValid}
              tooltipText={errors ? formatErrors(errors) : ''}
              hasShadow
            />
          </div>

          <AddVariants
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
