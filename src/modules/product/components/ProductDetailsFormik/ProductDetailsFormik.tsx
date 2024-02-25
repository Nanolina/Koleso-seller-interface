import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetProductById } from '../../../../redux/thunks/product';
import { Button } from '../../../../ui/Button/Button';
import { formatErrors } from '../../../../utils';
import {
  handleSubmitFormProduct,
  initialValuesProduct,
  validationSchemaProduct,
} from '../../productFormModel';
import { ICreateProductData, IProduct } from '../../types';
import { ProductFormFields } from '../formFields/ProductFormFields/ProductFormFields';

export const ProductDetailsFormik: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const savedProduct = JSON.parse(localStorage.getItem('product') || '{}');

  // useState
  const [isProductFound, setIsProductFound] = useState<boolean>(true);
  const [initialValues, setInitialValues] = useState<ICreateProductData>({
    ...initialValuesProduct,
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
      if (productId && productId !== NEW) {
        // Get data of product from DB
        const data = await dispatch(handleGetProductById(productId));

        // Retrieve data from a completed promise
        const product: IProduct = unwrapResult(data);

        // const imagesURL: string[] = [];
        // product.images.forEach((image) => imagesURL.push(image.url));

        // Set initial values based on the data from DB
        if (product) {
          console.log('product', product);
          setInitialValues({
            storeId: product.storeId,
            name: product.name,
            description: product.description,
            brand: product.brand,
            model: product.model,
            gender: product.gender,
            sectionId: product.sectionId,
            categoryId: product.categoryId,
            subcategoryId: product.subcategoryId,
            composition: product.composition,
            variants: product.variants,
            // colorWithImages: [
            //   {
            //     id: uuidv4(),
            //     color: product.color,
            //     images: imagesURL,
            //   },
            // ],
          });
        } else {
          setIsProductFound(false);
        }
      }
    };

    fetchData();
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = useCallback(
    (values: ICreateProductData) => {
      handleSubmitFormProduct(
        product,
        productId,
        dispatch,
        setInitialValues,
        values,
        navigate
      );
    },
    [product, productId, dispatch, navigate]
  );

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
      validationSchema={() => validationSchemaProduct(t)}
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
        <Form>
          <ProductFormFields
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            resetForm={resetForm}
            initialValuesProduct={initialValuesProduct}
          />

          <div className="buttonSaveItemContainer">
            <Button
              text={t('save')}
              type="submit"
              disabled={!isValid}
              tooltipText={errors ? formatErrors(errors) : ''}
            />
            {productId && productId !== NEW && product && (
              <span
                className="removeText"
                // onClick={() =>
                // handleRemoveFormStore(
                //   storeId,
                //   dispatch,
                //   previewUrl,
                //   setPreviewUrl,
                //   setInitialValues,
                //   navigate
                // )
                // }
              >
                {t('products.productDetails.removeProduct')}
              </span>
            )}
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
