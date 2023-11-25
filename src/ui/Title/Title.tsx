import React from 'react';
import { ITitleProps } from '../types';
import styles from './Title.module.css';

export const Title: React.FC<ITitleProps> = React.memo(({ text }) => {
  return <h1 className={styles.text}>{text}</h1>;
});
