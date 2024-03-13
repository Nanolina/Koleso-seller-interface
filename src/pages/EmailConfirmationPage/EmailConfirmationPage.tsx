import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EmailConfirmation } from '../../modules/auth';
import { SignOutModal } from '../../modules/modal';
import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { Title } from '../../ui/Title/Title';
import styles from './EmailConfirmationPage.module.css';

export const EmailConfirmationPage: React.FC = () => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Logo />
      <span className={styles.signOut} onClick={() => setModalOpen(true)}>
        {t('settings.signOutOfAccount')}
      </span>
      <Title text={t('auth.emailConfirmation')} />
      <EmailConfirmation />
      <SignOutModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};
