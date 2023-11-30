import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { RootState } from '../../../../redux/rootReducer';
import { useDocumentsForm } from '../../hooks/useDocumentsForm';

export const AddDocumentsForm: React.FC = () => {
  const { t } = useTranslation();

  const { companyRegistrationNumber } = useSelector(
    (state: RootState) => state.documents
  );

  const { handleChange } = useDocumentsForm();

  return (
    <>
      <InputLabel
        label={t('documents.companyRegistrationNumber')}
        id="companyRegistrationNumber"
        name="companyRegistrationNumber"
        value={companyRegistrationNumber}
        onChange={handleChange('companyRegistrationNumber')}
        required
      />
      <InputLabel
        label={t('documents.taxNumber')}
        id="companyRegistrationNumber"
        name="companyRegistrationNumber"
        value={companyRegistrationNumber}
        onChange={handleChange('companyRegistrationNumber')}
        required
      />
      <InputUploadLabel
        label={t('documents.registrationCertificate')}
        id="registrationCertificate"
        name="registrationCertificate"
        acceptFiles="image/*, .pdf, .doc, .docx, .txt"
        onChange={() => {}}
        multiple={false}
        required
      />
    </>
  );
};
