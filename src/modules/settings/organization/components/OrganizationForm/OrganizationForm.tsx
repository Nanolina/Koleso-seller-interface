import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { AppDispatch } from '../../../../../redux/store';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { initialValues } from '../../initialValues';
import { DocumentType } from '../../types';
import { validationSchema } from '../../validationSchema';
import { DocumentUpload } from '../DocumentUpload/DocumentUpload';

export const OrganizationForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  // const { loading, error, success } = useSelector(
  //   (state: IRootState) => state.user
  // );
  const [previews, setPreviews] = useState<any>({});
  const setPreview = (type: string, value: string | null) =>
    setPreviews((prev: any) => ({ ...prev, [type]: value }));

  const onSubmit = () => {};

  // if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, errors, touched, dirty, setFieldValue, isValid }) => (
        <Form className="formFieldsContainer">
          <InputLabel
            label={t('settings.organization.name')}
            id="name"
            name="name"
            value={values.name}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />
          <InputLabel
            label={t('settings.organization.TIN')}
            id="TIN"
            name="TIN"
            value={values.TIN}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />

          {Object.entries(DocumentType).map(([key, value]) => (
            <DocumentUpload
              key={key}
              name={value}
              label={t(`settings.organization.documents.${value}`)}
              setFieldValue={setFieldValue}
              preview={previews[value]}
              setPreview={(filePreview: any) => setPreview(value, filePreview)}
            />
          ))}

          <div className="buttonSaveItemContainer">
            <Button
              text={t('save')}
              type="submit"
              disabled={!isValid || !dirty}
              tooltipText={formatErrors(errors)}
            />
          </div>
          {/* {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />} */}
        </Form>
      )}
    </Formik>
  );
};
