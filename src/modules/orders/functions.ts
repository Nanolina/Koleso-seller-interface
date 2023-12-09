import { IOrder } from './types';

export function transformOrdersDataTable(orders: IOrder[]): string[][] {
  return orders.map((order: IOrder) => [
    order.date,
    order.orderNumber,
    order.status,
    order.delivery.method,
    order.totalCost,
  ]);
}
