import { useTranslation } from 'react-i18next';
import { SignUpForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title text={t('auth.registration')} />
      <SignUpForm />
    </Container>
  );
};
