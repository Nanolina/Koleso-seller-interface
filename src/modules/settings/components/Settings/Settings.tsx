import { useTranslation } from 'react-i18next';
import { Setting } from '../Setting/Setting';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Setting title={t('settings.shop')} extra='Marella'/>
      <Setting title={t('settings.phone')} />
      <Setting title={t('settings.email')} />
      <Setting title={t('settings.language')} />
      <Setting title={t('settings.password')} />
    </div>
  );
};
