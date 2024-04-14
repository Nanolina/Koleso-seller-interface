import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import styles from './CodeImageText.module.css';

export const CodeImageText: React.FC = () => {
  const { t } = useTranslation();

  const { email } = useSelector((state: IRootState) => state.user);

  return (
    <>
      <img src="/images/email.png" alt="Email" className={styles.image} />
      <div className={styles.textContainer}>
        {t('auth.code.email.sent')}
        <div className={styles.email}>{email}</div>
        <div className={styles.copy}>{t('auth.code.email.copy')}</div>
      </div>
    </>
  );
};
