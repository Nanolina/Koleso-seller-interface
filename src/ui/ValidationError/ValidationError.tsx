import { IValidationErrorProps } from '../types';
import styles from './ValidationError.module.css';

export const ValidationError = ({
  error,
  isErrorSmall = false,
}: IValidationErrorProps) => {
  if (!error) {
    return null;
  }

  return (
    <div className={isErrorSmall ? styles.smallError : styles.error}>
      {error}
    </div>
  );
};
