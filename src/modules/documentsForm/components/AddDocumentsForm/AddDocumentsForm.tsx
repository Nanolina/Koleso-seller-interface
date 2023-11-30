import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { RootState } from '../../../../redux/rootReducer';
import { useDocumentsForm } from '../../hooks/useDocumentsForm';
import { AddAccountData } from '../AddAccountDataForm/AddAccountDataForm';
import styles from './AddDocumentsForm.module.css';

export const AddDocumentsForm: React.FC = () => {
  const { t } = useTranslation();

  const { companyRegistrationNumber, taxNumber } = useSelector(
    (state: RootState) => state.documents
  );

  const { handleChange } = useDocumentsForm();

  return (
    <>
      <div className={styles.container}>
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
          id="taxNumber"
          name="taxNumber"
          value={taxNumber}
          onChange={handleChange('taxNumber')}
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
        <InputUploadLabel
          label={t('documents.certificateDirectorsAndSecretary')}
          id="certificateDirectorsAndSecretary"
          name="certificateDirectorsAndSecretary"
          acceptFiles="image/*, .pdf, .doc, .docx, .txt"
          onChange={() => {}}
          multiple={false}
          required
        />
        <InputUploadLabel
          label={t('documents.certificateRegisteredOffice')}
          id="certificateRegisteredOffice"
          name="certificateRegisteredOffice"
          acceptFiles="image/*, .pdf, .doc, .docx, .txt"
          onChange={() => {}}
          multiple={false}
          required
        />
      </div>

      <AddAccountData />
    </>
  );
};
