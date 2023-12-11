import { useTranslation } from 'react-i18next';
import { Setting } from '../Setting/Setting';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Setting
        title={t('settings.store.label')}
        extra="Marella"
        redirectPage="store"
      />
      <Setting title={t('settings.phone')} redirectPage="" />
      <Setting title={t('settings.email')} redirectPage="" />
      <Setting title={t('settings.language')} redirectPage="language" />
      <Setting title={t('settings.password')} redirectPage="" />
    </div>
  );
};
