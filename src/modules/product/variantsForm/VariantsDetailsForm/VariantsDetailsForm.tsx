import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { AddVariants } from '../components/AddVariants/AddVariants';
import { initialValuesVariants } from '../initialValues';
import { ICreateVariantsData } from '../types';
import { validationSchema } from '../validationSchema';

export const VariantsDetailsForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const savedProduct = JSON.parse(localStorage.getItem('product') || '{}');

  // useState
  const [isProductFound, setIsProductFound] = useState<boolean>(true);
  const [initialValues, setInitialValues] = useState<ICreateVariantsData>({
    ...initialValuesVariants,
    ...savedProduct,
  });

  // Values from Redux
  const { product, loading, error, success } = useSelector(
    (state: IRootState) => state.products
  );

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      // If the correct productId in the url
      // if (productId && productId !== NEW) {
      //   // Get data of product from DB
      //   const data = await dispatch(handleGetVariantsByProductId(productId));
      //   // Retrieve data from a completed promise
      //   const variants: IVariant[] = unwrapResult(data);
      //   // Set initial values based on the data from DB
      //   if (variants && variants.length) {
      //     setInitialValues({
      //       variants,
      //     });
      //   } else {
      //     setIsProductFound(false);
      //   }
      // }
    };

    fetchData();
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = () => console.log('submit variants');
  // const handleSubmit = useCallback(
  //   (values: ICreateProductData) => {
  //     handleSubmitFormProduct(
  //       product,
  //       productId,
  //       dispatch,
  //       setInitialValues,
  //       values,
  //       navigate
  //     );
  //   },
  //   [product, productId, dispatch, navigate]
  // );

  // Early returns
  if (!isProductFound) {
    return (
      <div className="itemNotFound">
        {t('products.productDetails.notFound')}
      </div>
    );
  }

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        isValid,
        dirty,
        resetForm,
      }) => (
        <Form className="formFieldsContainer">
          <AddVariants
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            resetForm={resetForm}
            initialValues={initialValuesVariants}
          />

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
