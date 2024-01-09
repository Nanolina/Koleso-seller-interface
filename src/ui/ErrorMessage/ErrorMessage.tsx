import { IErrorMessageProps } from '../types';
import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ error }: IErrorMessageProps) => {
  if (!error) {
    return null;
  }

  return <div className={styles.error}>{error}</div>;
};
