import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../ui/Button/Button';
import styles from './StatusContainer.module.css';

export const StatusContainer: React.FC<{ status: string }> = React.memo(
  ({ status }) => {
    const { t } = useTranslation();
    return (
      <div className={styles.container}>
        <div className={styles.currentStatus}>
          <>
            {t('orders.table.status')}:<div>{status}</div>
          </>
        </div>
        <Button
          text={
            <>
              {t('orderDetails.setStatus')}:
              <div>{t('orders.statuses.in-process')}</div>
            </>
          }
          onClick={() => {}}
        />
      </div>
    );
  }
);
