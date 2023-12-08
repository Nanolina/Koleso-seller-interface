import { ITextStringProps } from '../../modules/order/types';
import styles from './TextString.module.css';

export const TextString: React.FC<ITextStringProps> = ({ label, text }) => {
  return (
    <div>
      {label ? `${label}: ` : ''}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
