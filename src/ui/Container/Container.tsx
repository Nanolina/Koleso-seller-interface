import styles from './Container.module.css';

export const Container: React.FC<any> = ({
  onClick,
  children,
  isSmallContainer = false,
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
