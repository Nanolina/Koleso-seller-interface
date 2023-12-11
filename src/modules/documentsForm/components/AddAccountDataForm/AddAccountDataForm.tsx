import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { Title } from '../../../../ui/Title/Title';
import { useAccountDataForm } from '../../hooks/useAccountDataForm';

export const AddAccountData: React.FC = () => {
  const { t } = useTranslation();

  const { IBAN, SWIFT, holderName, bankName, accountNumber } = useSelector(
    (state: IRootState) => state.accountData
  );

  const { handleChange } = useAccountDataForm();

  return (
    <>
      <Title text={t('documents.account.label')} />
      <InputLabel
        label="IBAN"
        id="IBAN"
        name="IBAN"
        value={IBAN}
        onChange={handleChange('IBAN')}
        required
      />
      <InputLabel
        label={t('documents.account.SWIFT')}
        id="SWIFT"
        name="SWIFT"
        value={SWIFT}
        onChange={handleChange('SWIFT')}
        required
      />
      <InputLabel
        label={t('documents.account.holderName')}
        id="holderName"
        name="holderName"
        value={holderName}
        onChange={handleChange('holderName')}
        required
      />
      <InputLabel
        label={t('documents.account.bankName')}
        id="bankName"
        name="bankName"
        value={bankName}
        onChange={handleChange('bankName')}
        required
      />
      <InputLabel
        label={t('documents.account.accountNumber')}
        id="accountNumber"
        name="accountNumber"
        value={accountNumber}
        onChange={handleChange('accountNumber')}
        required
      />
    </>
  );
};
