import { useTranslation } from 'react-i18next';
import { EmailConfirmation } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';
import { Logo } from '../../ui/Logo/Logo';

export const EmailConfirmationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo />
      <Title text={t('auth.emailConfirmation')} />
      <EmailConfirmation />
    </Container>
  );
};
