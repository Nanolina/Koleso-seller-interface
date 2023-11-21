import React, { useState } from 'react';
import '../App.css';
import styles from './SideMenu.module.css'

export const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
      </div>
      <div className={styles.content}>
        <button onClick={toggleMenu}>Toggle Menu</button>
      </div>
    </>
  );
};
