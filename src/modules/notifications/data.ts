import { DELIVERYMETHODS, STATUSES } from '../../consts';
import { INotification } from './types';

export const notifications: INotification[] = [
  {
    id: 'f875ca3d-f03d-414d-80c4-57e1f4aec2d1',
    status: STATUSES.awaitingProcessing,
    date: '17.11.2023 10:40',
    orderNumber: '543625464',
    deliveryMethod: DELIVERYMETHODS.courier,
  },
  {
    id: '95d48afd-70fa-4d04-b73d-7907c3738093',
    status: STATUSES.rejection,
    date: '17.11.2023 10:40',
    articleKOLESO: '4545463',
    orderNumber: '2712273',
    price: '54',
    expirationDate: '21.11.2023',
  },
  {
    id: '5df9ebf0-93f5-4daf-807d-400af834b0b8',
    status: STATUSES.return,
    date: '17.11.2023 10:40',
    articleKOLESO: '4545463',
    orderNumber: '2712273',
    reason: 'Did not fit',
    expirationDate: '23.11.2023',
  },
];
