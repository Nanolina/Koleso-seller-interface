import { useTranslation } from 'react-i18next';
import { SignupForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const SignupPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title text={t('auth.registration')} />
      <SignupForm />
    </Container>
  );
};
