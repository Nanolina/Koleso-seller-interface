import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { mockOrders } from '../../data';
import { IOrder } from '../../types';

export const OrdersTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOrderDetails = (orderNumber: string) => {
    navigate(`/order/${orderNumber}`);
  };

  return (
    <Table>
      <TableHeader>
        <HeaderCell></HeaderCell>
        <HeaderCell>{t('orders.table.date')}</HeaderCell>
        <HeaderCell>{t('orders.table.orderNumber')}</HeaderCell>
        <HeaderCell>{t('orders.table.status')}</HeaderCell>
        <HeaderCell>{t('orders.table.deliveryMethod.label')}</HeaderCell>
        <HeaderCell>{t('orders.table.totalCost')}</HeaderCell>
      </TableHeader>

      <tbody>
        {mockOrders.map((order: IOrder, orderIndex: number) => (
          <TableRow
            key={`row-${orderIndex}`}
            rowIndex={orderIndex}
            onClick={() => handleOrderDetails(order.orderNumber)}
          >
            <TableCell cell={order.date} />
            <TableCell cell={order.orderNumber} />
            <TableCell cell={t(`orders.statuses.${order.status}`)} />
            <TableCell
              cell={t(`orders.table.deliveryMethod.${order.delivery.method}`)}
            />
            <TableCell cell={order.totalCost} />
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
