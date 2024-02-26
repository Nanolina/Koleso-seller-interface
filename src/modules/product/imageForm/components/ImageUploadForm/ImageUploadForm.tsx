import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { initialValuesImage } from '../../initialValues';
import { ICreateImageData } from '../../types';
import { ImageUpload } from '../ImageUpload/ImageUpload';

export const ImageUploadForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();

  const savedProduct = JSON.parse(localStorage.getItem('product') || '{}');

  // useState
  const [isProductFound, setIsProductFound] = useState<boolean>(true);
  const [initialValues, setInitialValues] = useState<ICreateImageData>({
    ...initialValuesImage,
    ...savedProduct,
  });

  // Values from Redux
  const { product, loading, error, success } = useSelector(
    (state: IRootState) => state.products
  );

  // useEffect
  useEffect(() => {
    // const fetchData = async () => {
    //   // If the correct productId in the url
    //   if (productId && productId !== NEW) {
    //     // Get data of product from DB
    //     const data = await dispatch(handleGetProductById(productId));
    //     // Retrieve data from a completed promise
    //     const product: IProduct = unwrapResult(data);
    //     // const imagesURL: string[] = [];
    //     // product.images.forEach((image) => imagesURL.push(image.url));
    //     // Set initial values based on the data from DB
    //     if (product) {
    //       console.log('product', product);
    //       setInitialValues({
    //         storeId: product.storeId,
    //         name: product.name,
    //         description: product.description,
    //         brand: product.brand,
    //         model: product.model,
    //         gender: product.gender,
    //         sectionId: product.sectionId,
    //         categoryId: product.categoryId,
    //         subcategoryId: product.subcategoryId,
    //         composition: product.composition,
    //       });
    //     } else {
    //       setIsProductFound(false);
    //     }
    //   }
    // };
    // fetchData();
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = () => {};
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
      // validationSchema={() => validationSchemaProduct(t)}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, errors, setFieldValue, isValid }) => (
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

          <ImageUpload values={values} setFieldValue={setFieldValue} />

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
