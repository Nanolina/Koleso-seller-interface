import React from 'react';
import { useTranslation } from 'react-i18next';
import { addressPickupPoint } from '../../../../../consts';
import { INotificationProps } from '../../../types';

export const ReturnDescription: React.FC<INotificationProps> = React.memo(
  ({ notification }) => {
    const { t } = useTranslation();

    return t('notifications.returnDescription', {
      articleKOLESO: notification.articleKOLESO,
      orderNumber: notification.orderNumber,
      reason: notification.reason,
      expirationDate: notification.expirationDate,
      addressPickupPoint: addressPickupPoint,
    });
  }
);
