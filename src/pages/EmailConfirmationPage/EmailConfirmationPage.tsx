import { useTranslation } from 'react-i18next';
import { EmailConfirmation } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const EmailConfirmationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title text={t('auth.emailConfirmation')} />
      <EmailConfirmation />
    </Container>
  );
};
