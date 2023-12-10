import { notifications } from '../../data';
import { INotification } from '../../types';
import { Notification } from '../Notification/Notification';
import styles from './Notifications.module.css';

export const Notifications: React.FC = () => {
  return (
    <div className={styles.container}>
      {notifications.map((notification: INotification) => (
        <Notification notification={notification} />
      ))}
    </div>
  );
};
