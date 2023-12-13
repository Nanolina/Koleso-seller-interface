import { useTranslation } from 'react-i18next';
import { LoginForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title text={t('auth.authorization')} />
      <LoginForm />
    </Container>
  );
};
