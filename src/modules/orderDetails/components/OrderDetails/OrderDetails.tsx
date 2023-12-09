import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { TextString } from '../../../../ui/TextString/TextString';
import { mockOrders } from '../../../orders';
import { DeliveryData } from '../DeliveryData/DeliveryData';
import { ProductList } from '../ProductList/ProductList';
import { StatusContainer } from '../StatusContainer/StatusContainer';
import styles from './OrderDetails.module.css';

const OrderNotFound = () => {
  const { t } = useTranslation();
  return <div>{t('orderDetails.notFound')}</div>;
};

export const OrderDetails: React.FC = () => {
  const { t } = useTranslation();

  const { orderNumber } = useParams<{ orderNumber: string }>();

  const order = useMemo(
    () => mockOrders.find((order) => order.orderNumber === orderNumber),
    [orderNumber]
  );

  if (!order) {
    return <OrderNotFound />;
  }

  return (
    <div className={styles.container}>
      <ProductList products={order.products} />
      <DeliveryData order={order} />

      <div className={styles.rightContainer}>
        <TextString
          label={t('orderDetails.totalCost')}
          text={`${order.totalCost} €`}
        />
        <StatusContainer status={t(`orders.statuses.${order.status}`)} />
      </div>
    </div>
  );
};
