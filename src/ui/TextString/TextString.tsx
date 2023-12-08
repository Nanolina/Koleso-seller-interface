import { ITextStringProps } from '../../modules/orderDetails/types';
import styles from './TextString.module.css';

export const TextString: React.FC<ITextStringProps> = ({ label, text }) => {
  return (
    <div className={styles.container}>
      {label ? `${label}: ` : ''}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
