import styles from './Container.module.css';

export const Container: React.FC<any> = ({ onClick, children }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};
