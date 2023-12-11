import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { ISettingProps } from '../../types';
import styles from './Setting.module.css';

export const Setting: React.FC<ISettingProps> = React.memo(
  ({ title, extra }) => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>

        {extra ? (
          <div className={styles.extraContainer}>
            <div className={styles.extraText}>{extra}</div>
            <FaChevronRight size={20} color="var(--gray)" />
          </div>
        ) : (
          <FaChevronRight size={20} color="var(--gray)" />
        )}
      </div>
    );
  }
);
