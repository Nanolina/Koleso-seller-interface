import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SignOutModal } from '../../../modal';
import { Setting } from '../Setting/Setting';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Setting title={t('settings.phone')} redirectPage="phone" />
      <Setting title={t('settings.email')} redirectPage="email" />
      <Setting title={t('settings.language')} redirectPage="language" />
      <Setting
        title={t('settings.password.changePassword')}
        redirectPage="password"
      />

      <span className={styles.signOut} onClick={() => setModalOpen(true)}>
        {t('settings.signOutOfAccount')}
      </span>

      <SignOutModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
