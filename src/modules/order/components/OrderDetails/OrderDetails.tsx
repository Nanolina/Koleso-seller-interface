import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { mockOrders } from '../../../orders';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

export const OrderDetails: React.FC = () => {
  const { t } = useTranslation();

  const { orderNumber } = useParams<{ orderNumber: string }>();

  const order = mockOrders.find((order) => order.orderNumber === orderNumber);
  if (!order) {
    return <div>{t('orderDetails.notFound')}</div>;
  }

  return order.products.map((articleDetails, index) => (
    <ArticleDetails
      articleDetails={articleDetails}
      index={index + 1}
      key={articleDetails.id}
    />
  ));
};
