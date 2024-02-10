import React from 'react';
import { ITitleProps } from '../types';
import styles from './Title.module.css';

export const Title: React.FC<ITitleProps> = React.memo(({ text }) => {
  return <p className={styles.text}>{text}</p>;
});
