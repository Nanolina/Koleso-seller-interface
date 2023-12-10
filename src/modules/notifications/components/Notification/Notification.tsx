import React from 'react';
import { useTranslation } from 'react-i18next';
import { getStatusStyle } from '../../functions';
import { INotificationProps } from '../../types';
import { RenderNotificationDescription } from '../RenderNotificationDescription/RenderNotificationDescription';
import styles from './Notification.module.css';

export const Notification: React.FC<INotificationProps> = React.memo(
  ({ notification }) => {
    const { t } = useTranslation();

    return (
      <div className={styles.container}>
        <div>
          <div className={getStatusStyle(notification.status, styles)}>
            {t(`orders.statuses.${notification.status}`)}
          </div>
          <div className={styles.date}>{notification.date}</div>
        </div>

        <RenderNotificationDescription notification={notification} />
      </div>
    );
  }
);
