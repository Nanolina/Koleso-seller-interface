import { Form, Formik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import {
  handleGetAllColorsWithFiles,
  handleUpdateColorsWithFiles,
} from '../../../../../redux/thunks/colorsWithFiles';
import { handleGetAllVariants } from '../../../../../redux/thunks/variants';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { IColorsWithFiles, IUpdateColorsWithFilesData } from '../../types';
import { ImageUpload } from '../ImageUpload/ImageUpload';

export const ImageUploadForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();

  // Values from Redux
  const { colorsWithFiles, loading, error, success } = useSelector(
    (state: IRootState) => state.colorsWithFiles
  );

  useEffect(() => {
    if (productId && productId !== NEW) {
      dispatch(handleGetAllColorsWithFiles(productId));
      dispatch(handleGetAllVariants(productId));
    }
  }, [dispatch, productId]);

  // Submit data
  const handleSubmit = useCallback(
    (values: IUpdateColorsWithFilesData) => {
      if (!productId) {
        return;
      }

      const filesFormData = new FormData();

      values.colorsWithFiles.forEach((filesWith1Color: IColorsWithFiles) => {
        filesWith1Color.files.forEach((file: File) => {
          filesFormData.append(`${filesWith1Color.color}`, file);
        });
      });
      dispatch(
        handleUpdateColorsWithFiles({
          productId,
          filesFormData,
        })
      );
    },
    [productId, dispatch]
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={{ colorsWithFiles }}
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
