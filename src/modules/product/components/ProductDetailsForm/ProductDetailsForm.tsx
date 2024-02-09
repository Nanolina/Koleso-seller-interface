import { unwrapResult } from '@reduxjs/toolkit';
import { Field, Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetProductById } from '../../../../redux/thunks/product';
import { Button } from '../../../../ui/Button/Button';
import {
  handleSubmitFormProduct,
  initialValuesProduct,
  validationSchemaProduct,
} from '../../productFormModel';
import { ColorType, ICreateProductData, IProduct } from '../../types';
import styles from './ProductDetailsForm.module.css';

export const ProductDetailsForm: React.FC = () => {
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
      if (productId && productId !== 'new') {
        // Get data of product from DB
        const data = await dispatch(handleGetProductById(productId));

        // Retrieve data from a completed promise
        const product: IProduct = unwrapResult(data);

        // Set initial values based on the data from DB
        if (product) {
          setInitialValues({
            name: product.name,
            description: product.description || '',
            image: '',
            color: ColorType.White,
            composition: [],
            quantity: 0,
            priceWithoutDiscount: 0,
            finalPrice: 0,
            storeId: '',
            sectionId: 0,
            categoryId: 0,
            subcategoryId: 0,
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
      <div className={styles.notFound}>
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
      {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
        <Form className={styles.container}>
          <InputLabel
            label={t('products.table.name')}
            id="name"
            name="name"
            keyInLocalStorage="product"
            value={values.name}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />

          {/* <CatalogSelects /> */}
          <InputLabel
            label={t('products.table.brand')}
            id="brand"
            name="brand"
            keyInLocalStorage="product"
            value={values.brand}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
          <InputLabel
            label={t('products.table.model')}
            id="model"
            name="model"
            keyInLocalStorage="product"
            value={values.model}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
          <InputLabel
            label={t('products.table.articleSupplier')}
            id="articleSupplier"
            name="articleSupplier"
            keyInLocalStorage="product"
            value={values.articleSupplier}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            extraText={t('products.form.extraTextArticleSupplier')}
          />

          {/* <SelectLabel
              id="gender"
              name="gender"
              label={t('products.form.gender.label')}
              options={GENDERS}
              onChange={handleChange('gender')}
              value={gender}
              firstText={t('products.form.gender.select')}
              translationType="products.form.gender"
            />
            <AddComposition />
            <AddParameters /> */}
          <Field
            as={TextareaLabel}
            label={t('products.table.description')}
            id="description"
            name="description"
            keyInLocalStorage="product"
            value={values.description}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            rows={8}
          />

          {/* <PhotoUpload /> */}
          <InputLabel
            label={t('products.table.priceWithoutDiscount')}
            id="priceWithoutDiscount"
            name="priceWithoutDiscount"
            keyInLocalStorage="product"
            value={values.priceWithoutDiscount}
            setFieldValue={setFieldValue}
            extraText={t('products.form.price.oldPriceExtra')}
            errors={errors}
            touched={touched}
            placeholder="0"
            required
          />

          <InputLabel
            label={t('products.table.finalPrice')}
            id="finalPrice"
            name="finalPrice"
            keyInLocalStorage="product"
            value={values.finalPrice}
            setFieldValue={setFieldValue}
            extraText={t('products.form.price.priceExtra')}
            errors={errors}
            touched={touched}
            placeholder="0"
            required
          />

          <div className={styles.buttonContainer}>
            <Button text={t('save')} type="submit" disabled={!isValid} />

            {productId && productId !== 'new' && product && (
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
