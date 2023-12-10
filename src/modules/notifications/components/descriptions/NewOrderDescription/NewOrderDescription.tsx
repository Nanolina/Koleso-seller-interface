import React from 'react';
import { useTranslation } from 'react-i18next';
import { INotificationProps } from '../../../types';

export const NewOrderDescription: React.FC<INotificationProps> = React.memo(
  ({ notification }) => {
    const { t } = useTranslation();

    return t('notifications.newOrderDescription', {
      orderNumber: notification.orderNumber,
      deliveryMethod: t(
        `orders.table.deliveryMethod.${notification.deliveryMethod}`
      ),
    });
  }
);
