export interface INotification {
  id: string;
  status: string;
  date: string;
  orderNumber: string;
  deliveryMethod?: string;
  articleKoleso?: string;
  price?: string;
  expirationDate?: string;
  reason?: string;
}

export interface INotificationProps {
  notification: INotification;
}
