import React from 'react';
import { ITabProps } from '../types';
import styles from './Tab.module.css';

export const Tab: React.FC<ITabProps> = React.memo(
  ({ activeTab, setActiveTab, tabName, text, icon }) => {
    const getTabClass = (tabName: string) => {
      const isActive = activeTab === tabName;
      return `${styles.button} ${isActive ? styles.active : ''}`;
    };

    return (
      <button
        className={getTabClass(tabName)}
        onClick={() => setActiveTab(tabName)}
      >
        {icon}
        {text}
      </button>
    );
  }
);
