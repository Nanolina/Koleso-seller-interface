import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../redux/rootReducer';
import styles from './Text.module.css';

export const Text: React.FC = () => {
  const { t } = useTranslation();

  const { email } = useSelector((state: IRootState) => state.user);

  return (
    <>
      <h3 className={styles.header}>{t('auth.changeEmail.header')}</h3>
      <ol>
        {t('auth.changeEmail.caseNotReceive')}:
        <li>
          {t('auth.changeEmail.check')}: {email}
        </li>
        <li>{t('auth.changeEmail.spam')}</li>
        <li> {t('auth.changeEmail.wait')}</li>
      </ol>
    </>
  );
};
