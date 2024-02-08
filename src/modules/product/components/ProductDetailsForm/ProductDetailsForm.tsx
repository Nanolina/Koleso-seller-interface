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
import { Modal } from '../../../modal/Modal/Modal';
import {
  handleSubmitFormProduct,
  initialValuesProduct,
  validationSchemaProduct,
} from '../../productFormModel';
import {
  ColorType,
  ICreateProductData,
  IProduct,
  IProductDetailsFormProps,
} from '../../types';
import styles from './ProductDetailsForm.module.css';

export const ProductDetailsForm: React.FC<IProductDetailsFormProps> =
  React.memo(({ modalOpen, handleCloseModal }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { productId } = useParams<{ productId: string }>();

    // useState
    const [isProductFound, setIsProductFound] = useState<boolean>(true);
    const [initialValues, setInitialValues] =
      useState<ICreateProductData>(initialValuesProduct);

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

    if (loading)
      return (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <Loader />
        </Modal>
      );

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchemaProduct(t)}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, setFieldValue, isValid, dirty }) => (
          <Form className={styles.container}>
            <InputLabel
              label={t('products.table.name')}
              id="name"
              name="name"
              errors={errors}
              touched={touched}
              required
            />

            {/* <CatalogSelects /> */}
            <InputLabel
              label={t('products.table.brand')}
              id="brand"
              name="brand"
              errors={errors}
              touched={touched}
              required
            />
            <InputLabel
              label={t('products.table.model')}
              id="model"
              name="model"
              errors={errors}
              touched={touched}
              required
            />
            <InputLabel
              label={t('products.table.articleSupplier')}
              id="articleSupplier"
              name="articleSupplier"
              errors={errors}
              touched={touched}
              extraText={t('products.form.extraTextArticleSupplier')}
              required
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
              errors={errors}
              touched={touched}
              rows={8}
              required
            />

            {/* <PhotoUpload /> */}
            <InputLabel
              label={t('products.table.priceWithoutDiscount')}
              id="priceWithoutDiscount"
              name="priceWithoutDiscount"
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
              extraText={t('products.form.price.priceExtra')}
              errors={errors}
              touched={touched}
              placeholder="0"
              required
            />

            <div className={styles.buttonContainer}>
              <Button
                text={t('save')}
                type="submit"
                disabled={!isValid || !dirty}
              />

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
  });
