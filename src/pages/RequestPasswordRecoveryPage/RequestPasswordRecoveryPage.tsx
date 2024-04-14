import { useTranslation } from 'react-i18next';
import { RequestPasswordRecoveryForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { Title } from '../../ui/Title/Title';

export const RequestPasswordRecoveryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo />
      <Title text={`${t('auth.forgotPassword')}?`} />
      <RequestPasswordRecoveryForm />
    </Container>
  );
};
