import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ISettingProps } from '../../types';
import styles from './Setting.module.css';

export const Setting: React.FC<ISettingProps> = React.memo(
  ({ title, extra, redirectPage }) => {
    const navigate = useNavigate();

    const handleRedirect = (page: string) => {
      navigate(`/settings/${page}`);
    };

    return (
      <div
        className={styles.container}
        onClick={() => handleRedirect(redirectPage)}
      >
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
