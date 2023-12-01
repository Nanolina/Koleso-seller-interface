export interface IRecipient {
  name: string;
}

export interface IDelivery {
  method: string;
  address: string;
  deliveryDestinationDate: string;
  notes: string;
  recipient: IRecipient;
}

export interface IProduct {
  id: string;
  articleSupplier: string;
  articleKoleso: string;
  title: string;
  color: string;
  size: number;
  brand: string;
  quantity: string;
  priceWithoutDiscount: string;
  finalPrice: string;
  totalPrice: string;
}

export interface IOrder {
  id: string;
  orderNumber: string;
  status: string;
  delivery: IDelivery;
  totalPrice: string;
  date: string;
  products: IProduct[];
}

export interface IStatuses {
  awaitingProcessing: 'awaiting-processing';
  inProcess: 'in-process';
  readyToShip: 'ready-to-ship';
  shipped: 'shipped';
  delivered: 'delivered';
  canceled: 'canceled';
  rejection: 'rejection';
  pendingRefund: 'pending-refund';
  return: 'return';
  returned: 'returned';
  pendingPayment: 'pending-payment';
}
