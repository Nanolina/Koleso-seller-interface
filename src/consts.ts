import { ColorType } from './modules/product/types';
import { IStatuses, RoleType } from './types';

export const NEW = 'new';
export const GENDERS: string[] = ['Male', 'Female'];
export const ROLE = RoleType.Seller;
export const COMPOSITIONS: string[] = [
  'Cotton',
  'Polyester',
  'Nylon',
  'Wool',
  'Silk',
  'Linen',
  'Cashmere',
  'Modal',
  'Spandex',
  'Acrylic',
  'Viscose',
  'Bamboo',
  'Denim',
  'Fleece',
  'Satin',
  'Tweed',
  'Velvet',
  'Leather',
  'Faux Leather',
  'Suede',
  'Synthetic',
  'Lycra',
  'Chiffon',
  'Lace',
  'Microfiber',
  'Jersey',
];

export const SIZES: string[] = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
];

export const COLORS = Object.values(ColorType).filter(
  (value) => typeof value === 'string'
) as string[];

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

export const CURRENCY = '€';

export const DELIVERYMETHODS = {
  courier: 'courier',
  pickupPoint: 'pickupPoint',
};

export const addressPickupPoint = 'Limassol Ave., 11, 5th floor, Aglanja, 2112';

export const LANGUAGE = 'language';
