import { Form, Formik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import {
  handleGetAllVariants,
  handleUpdateVariants,
} from '../../../../../redux/thunks/variants';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { IUpdateVariantsData } from '../../types';
import { validationSchema } from '../../validationSchema';
import { AddVariants } from '../AddVariants/AddVariants';

export const VariantDetailsForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();

  // Values from Redux
  const { variants, loading, error, success } = useSelector(
    (state: IRootState) => state.variants
  );

  useEffect(() => {
    if (productId) dispatch(handleGetAllVariants(productId));
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = useCallback(
    (values: IUpdateVariantsData) => {
      if (!productId) {
        return;
      }

      dispatch(handleUpdateVariants({ productId, variants: values.variants }));
    },
    [productId, dispatch]
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={{ variants }}
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
