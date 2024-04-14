import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { MessageBox } from '../../components/MessageBox/MessageBox';
import { EmailCodeForm } from '../../modules/auth';
import { SignOutModal } from '../../modules/modal';
import { CodeType } from '../../types';
import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { Title } from '../../ui/Title/Title';
import styles from './EmailCodePage.module.css';

export const EmailCodePage: React.FC = () => {
  const { t } = useTranslation();
  const { codeType } = useParams<{ codeType: CodeType }>();

  const [modalOpen, setModalOpen] = useState(false);

  let titleText;
  switch (codeType) {
    case CodeType.PASSWORD_RESET:
      titleText = t('auth.code.email.passwordReset');
      break;
    case CodeType.EMAIL_CONFIRMATION:
    default:
      titleText = t('auth.code.email.confirm');
      break;
  }

  if (!codeType) {
    return <MessageBox errorMessage={t('auth.code.email.notFoundCodeType')} />;
  }

  return (
    <Container>
      <Logo />
      <span className={styles.signOut} onClick={() => setModalOpen(true)}>
        {t('settings.signOutOfAccount')}
      </span>
      <Title text={titleText} />
      <EmailCodeForm codeType={codeType} />
      <SignOutModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};
