import { useTranslation } from 'react-i18next';
import { RequestPasswordRecoveryForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const RequestPasswordRecoveryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title text={`${t('auth.forgetPassword')}?`} />
      <RequestPasswordRecoveryForm />
    </Container>
  );
};
