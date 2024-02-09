import { IContainerProps } from '../types';
import styles from './Container.module.css';

export const Container: React.FC<IContainerProps> = ({
  isSmallContainer = false,
  children,
}) => {
  return (
    <div
      className={isSmallContainer ? styles.smallContainer : styles.container}
    >
      {children}
    </div>
  );
};
