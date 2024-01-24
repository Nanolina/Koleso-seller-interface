import React from 'react';
import { useTranslation } from 'react-i18next';
import { ITimerTextProps } from '../..';
import styles from './Timer.module.css';

export const TimerText: React.FC<ITimerTextProps> = React.memo(({ timer }) => {
  const { t } = useTranslation();

  return (
    <p className={styles.text}>
      {t('auth.timer.wait')} {timer} {t('auth.timer.seconds')}
    </p>
  );
});
