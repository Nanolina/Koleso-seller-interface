import { Form, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { NEW } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleGetOrganizationById } from '../../../../../redux/thunks/organization';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { handleSubmitForm } from '../../handlers';
import { DocumentType, ICreateOrganizationData, IDocuments } from '../../types';
import { validationSchema } from '../../validationSchema';
import { DocumentUpload } from '../DocumentUpload/DocumentUpload';

export const OrganizationForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Params
  const { organizationId } = useParams<{ organizationId: string }>();

  // Redux
  const { organization, loading, error, success } = useSelector(
    (state: IRootState) => state.organization
  );

  // useState
  const [previews, setPreviews] = useState<IDocuments>(organization.documents);
  const setPreview = (type: string, value: string | null) =>
    setPreviews((prev: any) => ({ ...prev, [type]: value }));

  // Submit data
  const onSubmit = useCallback(
    (values: ICreateOrganizationData) => {
      handleSubmitForm(organizationId, values, dispatch, navigate);
    },
    [dispatch, organizationId, navigate]
  );

  // useEffect
  useEffect(() => {
    if (organizationId && organizationId !== NEW) {
      dispatch(handleGetOrganizationById(organizationId));
    }
  }, [dispatch, organizationId]);

  useEffect(() => {
    if (organization && organization.documents) {
      setPreviews(organization.documents);
    }
  }, [organization]);

  // Loader
  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={organization}
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
            value={values.TIN || ''}
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
              setPreview={(filePreview: string | null) =>
                setPreview(value, filePreview)
              }
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

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
