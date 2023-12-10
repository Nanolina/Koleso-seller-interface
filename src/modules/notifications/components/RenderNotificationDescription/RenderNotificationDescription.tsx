import React from 'react';
import { useTranslation } from 'react-i18next';
import { STATUSES } from '../../../../consts';
import { INotificationProps } from '../../types';
import { NewOrderDescription } from '../descriptions/NewOrderDescription/NewOrderDescription';
import { RejectionDescription } from '../descriptions/RejectionDescription/RejectionDescription';
import { ReturnDescription } from '../descriptions/ReturnDescription/ReturnDescription';

export const RenderNotificationDescription: React.FC<INotificationProps> =
  React.memo(({ notification }) => {
    const { t } = useTranslation();

    switch (notification.status) {
      case STATUSES.awaitingProcessing:
        return <NewOrderDescription notification={notification} />;
      case STATUSES.rejection:
        return <RejectionDescription notification={notification} />;
      case STATUSES.return:
        return <ReturnDescription notification={notification} />;
      default:
        return <div>{t(`orders.statuses.${notification.status}`)}</div>;
    }
  });
