import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Title } from '../../../../ui/Title/Title';

export const AddAccountData: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title text={t('documents.account.label')} />
      <InputLabel
        label="IBAN"
        id="IBAN"
        name="IBAN"
        // value={IBAN}
        // onChange={handleChange('IBAN')}
        required
      />
      <InputLabel
        label={t('documents.account.SWIFT')}
        id="SWIFT"
        name="SWIFT"
        // value={SWIFT}
        // onChange={handleChange('SWIFT')}
        required
      />
      <InputLabel
        label={t('documents.account.holderName')}
        id="holderName"
        name="holderName"
        // value={holderName}
        // onChange={handleChange('holderName')}
        required
      />
      <InputLabel
        label={t('documents.account.bankName')}
        id="bankName"
        name="bankName"
        // value={bankName}
        // onChange={handleChange('bankName')}
        required
      />
      <InputLabel
        label={t('documents.account.accountNumber')}
        id="accountNumber"
        name="accountNumber"
        // value={accountNumber}
        // onChange={handleChange('accountNumber')}
        required
      />
    </>
  );
};
