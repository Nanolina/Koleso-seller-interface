import { useTranslation } from 'react-i18next';
import { SetNewPasswordForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { Title } from '../../ui/Title/Title';

export const SetNewPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo />
      <Title text={t('auth.setNewPassword')} />
      <SetNewPasswordForm />
    </Container>
  );
};
