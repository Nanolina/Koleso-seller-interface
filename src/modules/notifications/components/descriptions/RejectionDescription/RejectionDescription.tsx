import React from 'react';
import { useTranslation } from 'react-i18next';
import { addressPickupPoint } from '../../../../../consts';
import { INotificationProps } from '../../../types';

export const RejectionDescription: React.FC<INotificationProps> = React.memo(
  ({ notification }) => {
    const { t } = useTranslation();

    return t('notifications.rejectionDescription', {
      articleKOLESO: notification.articleKOLESO,
      orderNumber: notification.orderNumber,
      price: notification.price,
      expirationDate: notification.expirationDate,
      addressPickupPoint: addressPickupPoint,
    });
  }
);
