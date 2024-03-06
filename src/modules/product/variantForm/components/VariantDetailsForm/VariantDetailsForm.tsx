import { Form, Formik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import {
  handleGetProductById,
  handleUpdateVariants,
} from '../../../../../redux/thunks/product';
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
  const {
    items: variants,
    showDeleted,
    error,
    success,
  } = useSelector((state: IRootState) => state.products.product.variants);

  useEffect(() => {
    if (productId && productId !== NEW) {
      dispatch(
        handleGetProductById({
          id: productId,
          filterVariants: {
            type: showDeleted ? 'deleted' : 'active',
          },
        })
      );
    }
  }, [dispatch, productId, showDeleted]);

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
              disabled={!isValid || showDeleted}
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
