import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextString } from '../../../../ui/TextString/TextString';
import { IOrder } from '../../../orders';

export const DeliveryData: React.FC<{ order: IOrder }> = React.memo(
  ({ order }) => {
    const { t } = useTranslation();

    return (
      <>
        <TextString
          label={t('orders.table.deliveryMethod.label')}
          text={t(`orders.table.deliveryMethod.${order.delivery.method}`)}
        />
        <TextString
          label={t('orderDetails.recipientName')}
          text={order.delivery.recipientName}
        />
        <TextString
          label={t('orderDetails.address')}
          text={order.delivery.address}
        />
        <TextString label={t('orderDetails.date')} text={order.delivery.date} />
        <TextString
          label={t('orderDetails.notes')}
          text={order.delivery.notes}
        />
      </>
    );
  }
);
