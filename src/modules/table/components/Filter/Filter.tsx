import { FaFilter } from 'react-icons/fa';
import styles from './Filter.module.css';

export const Filter: React.FC = () => {
  return (
    <div className={styles.icon}>
      <FaFilter size={20} />
    </div>
  );
};
