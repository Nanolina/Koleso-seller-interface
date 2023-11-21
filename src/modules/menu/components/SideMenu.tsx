import React, { useCallback, useMemo, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { menuItems } from '../menuItems';
import { MenuItem } from './MenuItem';
import styles from './SideMenu.module.css';

export const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = useCallback((itemId: string) => {
    console.log('Menu item clicked:', itemId);
  }, []);

  const renderedMenuItems = useMemo(() => {
    return menuItems.map((item) => (
      <MenuItem key={item.id} item={item} onClick={handleMenuItemClick} />
    ));
  }, [handleMenuItemClick]);

  return (
    <>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>{renderedMenuItems}</ul>
      </div>
      {!isMenuOpen ? (
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </button>
      ) : (
        <button
          className={styles.arrowLeftButton}
          onClick={() => setIsMenuOpen(false)}
        >
          <IoIosArrowBack size={40} color="white" />
        </button>
      )}
    </>
  );
};
