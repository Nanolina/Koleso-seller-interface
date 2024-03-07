import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import {
  handleGetProductById,
  handleRemoveProduct,
} from '../../../../../redux/thunks/product';
import { handleGetAllStores } from '../../../../../redux/thunks/store';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { RemoveItemModal } from '../../../../modal';
import { handleSubmitFormProduct } from '../../handlers';
import {
  initialValuesProduct,
  mapProductToInitialValues,
} from '../../initialValues';
import { ICreateProductData, IProduct } from '../../types';
import { validationSchema } from '../../validationSchema';
import { ProductFormFields } from '../ProductFormFields/ProductFormFields';

export const ProductDetailsFormik: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Params
  const { productId } = useParams<{ productId: string }>();

  // Redux
  const { loading, error, success } = useSelector(
    (state: IRootState) => state.products
  );

  // Local storage
  const savedProduct = JSON.parse(localStorage.getItem('product') || '{}');

  // useState
  const [modalOpen, setModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState<ICreateProductData>({
    ...initialValuesProduct,
    ...savedProduct,
  });

  // Get product by id
  const fetchData = useCallback(async () => {
    if (productId && productId !== NEW) {
      const data = await dispatch(
        handleGetProductById({
          id: productId,
          filterVariants: { type: 'active' },
        })
      );
      const resultProduct: IProduct = unwrapResult(data);
      if (resultProduct)
        setInitialValues(mapProductToInitialValues(resultProduct));
    }
  }, [productId, dispatch]);

  // Submit data
  const onSubmit = useCallback(
    (values: ICreateProductData) => {
      handleSubmitFormProduct(
        productId,
        dispatch,
        setInitialValues,
        values,
        navigate
      );
    },
    [productId, dispatch, navigate]
  );

  // Remove product
  const onRemove = useCallback(() => {
    if (productId) {
      dispatch(handleRemoveProduct(productId));
      navigate('/products');
    }
  }, [productId, dispatch, navigate]);

  // useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    dispatch(handleGetAllStores({ type: 'active' }));
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, setFieldValue, isValid, resetForm }) => (
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

          <ProductFormFields
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            resetForm={resetForm}
            initialValuesProduct={initialValuesProduct}
          />

          {productId && productId !== NEW && (
            <span className="removeText" onClick={() => setModalOpen(true)}>
              {t('products.productDetails.removeProduct')}
            </span>
          )}

          <RemoveItemModal
            text={t('products.productDetails.modal.removeText')}
            extraText={t('products.productDetails.modal.removeExtraText')}
            onRemove={onRemove}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
