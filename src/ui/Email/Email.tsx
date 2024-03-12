import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../components/InputLabel/InputLabel';
import { IEmailProps } from '../types';

export const Email: React.FC<IEmailProps> = ({
  value,
  setFieldValue,
  errors,
  touched,
}) => {
  const { t } = useTranslation();

  return (
    <InputLabel
      name="email"
      inputType="email"
      label={t('auth.email')}
      id="email"
      value={value}
      setFieldValue={setFieldValue}
      errors={errors}
      touched={touched}
      required
    />
  );
};
