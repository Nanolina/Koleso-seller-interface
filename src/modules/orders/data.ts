import { IOrder, IStatuses } from './types';

export const STATUSES: IStatuses = {
  awaitingProcessing: 'awaiting-processing',
  inProcess: 'in-process',
  readyToShip: 'ready-to-ship',
  shipped: 'shipped',
  delivered: 'delivered',
  canceled: 'canceled',
  rejection: 'rejection',
  pendingRefund: 'pending-refund',
  return: 'return',
  returned: 'returned',
  pendingPayment: 'pending-payment',
};

export const mockOrders: IOrder[] = [
  {
    id: 'e59a59e7-5daa-4449-af67-1fa974507fd1',
    orderNumber: '234145j21',
    status: STATUSES.awaitingProcessing,
    delivery: {
      method: 'courier',
      address: 'Limassol Ave., 11, 5th floor, Aglanja, 2112',
      deliveryDestinationDate: '18.11.2023',
      notes: 'Позвонить за 30 мин до приезда',
      recipient: {
        name: 'Lika Nola',
      },
    },
    totalPrice: '200',
    date: '03.09.2023',
    products: [
      {
        id: '5282df4f-be5b-42a0-9177-f3208bfe909c',
        articleSupplier: '453719937',
        articleKoleso: '13327122',
        title: 'Red dress',
        color: 'red',
        size: 37,
        brand: 'Gucci',
        quantity: '2',
        priceWithoutDiscount: '300',
        finalPrice: '100',
        totalPrice: '200',
      },
    ],
  },
];
