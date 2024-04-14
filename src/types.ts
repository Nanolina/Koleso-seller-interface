export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

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

export interface IFilterQuery {
  type: string;
}

export enum LanguageType {
  English = 'English',
  Russian = 'Russian',
}

export enum RoleType {
  Seller = 'Seller',
  Customer = 'Customer',
}

export enum CodeType {
  EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION',
  PHONE_CONFIRMATION = 'PHONE_CONFIRMATION',
  PASSWORD_RESET = 'PASSWORD_RESET',
}
