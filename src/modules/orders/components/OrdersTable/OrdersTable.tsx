import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '../../../table';
import { mockOrders } from '../../data';
import { transformOrdersDataTable } from '../../functions';

export const OrdersTable: React.FC = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<(string | number)[][]>([]);

  const headers = useMemo(
    () => [
      t('orders.table.date'),
      t('orders.table.orderNumber'),
      t('orders.table.status'),
      t('orders.table.deliveryMethod.label'),
      t('orders.table.totalPrice'),
    ],
    [t]
  );

  useEffect(() => {
    const ordersWithTranslatedStatuses = mockOrders.map((order) => ({
      ...order,
      status: t(`orders.statuses.${order.status}`),
      delivery: {
        ...order.delivery,
        method: t(`orders.table.deliveryMethod.${order.delivery.method}`),
      },
    }));

    const dataTable = transformOrdersDataTable(ordersWithTranslatedStatuses);
    setOrders(dataTable);
  }, [t]);

  return <Table headers={headers} data={orders} />;
};
