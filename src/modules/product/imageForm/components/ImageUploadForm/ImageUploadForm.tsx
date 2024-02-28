import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleGetAllColorsWithImages } from '../../../../../redux/thunks/colorsWithImages';
import { handleGetAllVariants } from '../../../../../redux/thunks/variants';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { ImageUpload } from '../ImageUpload/ImageUpload';

export const ImageUploadForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();

  // Values from Redux
  const { colorsWithImages, loading, error, success } = useSelector(
    (state: IRootState) => state.colorsWithImages
  );

  useEffect(() => {
    if (productId && productId !== NEW) {
      dispatch(handleGetAllColorsWithImages(productId));
      dispatch(handleGetAllVariants(productId));
    }
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = () => {};

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={{ colorsWithImages }}
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
