import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ISettingProps } from '../../types';
import styles from './Setting.module.css';

export const Setting: React.FC<ISettingProps> = React.memo(
  ({ title, extra, redirectPage, isNoRedirect = false }) => {
    const navigate = useNavigate();

    const handleRedirect = (page: string) => {
      navigate(`/settings/${page}`);
    };

    return (
      <div
        className={styles.container}
        onClick={() => (isNoRedirect ? {} : handleRedirect(redirectPage))}
      >
        <div>
          <div className={styles.title}>{title}</div>
          {extra && <div className={styles.extraText}>{extra}</div>}
        </div>

        {!isNoRedirect && <FaChevronRight size={20} color="var(--gray)" />}
      </div>
    );
  }
);
