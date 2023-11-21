import React, { useCallback, useMemo } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { menuItems } from '../../menuItems';
import { ISideMenuProps } from '../../types';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './SideMenu.module.css';

export const SideMenu: React.FC<ISideMenuProps> = React.memo(
  ({ isMenuOpen, setIsMenuOpen }) => {
    const handleMenuItemClick = useCallback(
      (itemId: string) => {
        console.log('Menu item clicked:', itemId);
        setIsMenuOpen(false);
      },
      [setIsMenuOpen]
    );

    const renderedMenuItems = useMemo(() => {
      return menuItems.map((item) => (
        <MenuItem key={item.id} item={item} onClick={handleMenuItemClick} />
      ));
    }, [handleMenuItemClick]);

    return (
      <div>
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
      </div>
    );
  }
);
