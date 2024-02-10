import { IContainerProps } from '../types';
import styles from './Container.module.css';

export const Container: React.FC<IContainerProps> = ({
  isSmallContainer = false,
  onClick,
  children,
}) => {
  return (
    <div
      className={isSmallContainer ? styles.smallContainer : styles.container}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
