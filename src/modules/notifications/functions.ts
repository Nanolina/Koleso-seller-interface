import { STATUSES } from '../../consts';

export const getStatusStyle = (status: string, styles: any) => {
  switch (status) {
    case STATUSES.awaitingProcessing:
      return styles.newOrder;
    case STATUSES.rejection:
      return styles.rejection;
    case STATUSES.return:
      return styles.return;
    default:
      return '';
  }
};
