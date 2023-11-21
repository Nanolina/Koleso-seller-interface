import { ITitleProps } from '../../types';
import styles from './Title.module.css';

export const Title: React.FC<ITitleProps> = ({ text }) => {
  return <h1 className={styles.text}>{text}</h1>;
};
