import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MessageBox } from '../../components/MessageBox/MessageBox';
import { SetNewPasswordForm } from '../../modules/auth';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const SetNewPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const { userId } = useParams();

  if (!userId) {
    return <MessageBox errorMessage="Something went wrong, please try again" />;
  }

  return (
    <Container>
      <Title text={t('auth.setNewPassword')} />
      <SetNewPasswordForm userId={userId} />
    </Container>
  );
};
