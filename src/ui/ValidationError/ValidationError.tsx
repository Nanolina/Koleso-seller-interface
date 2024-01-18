import { IValidationErrorProps } from '../types';
import styles from './ValidationError.module.css';

export const ValidationError = ({ error }: IValidationErrorProps) => {
  if (!error) {
    return null;
  }

  return <div className={styles.error}>{error}</div>;
};
