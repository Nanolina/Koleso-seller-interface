import React, { useCallback, useMemo } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { toggleMenu } from '../../../../redux/slices/menuSlice';
import { menuItems } from '../../menuItems';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './SideMenu.module.css';

export const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: IRootState) => state.menu.isMenuOpen);

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  const renderedMenuItems = useMemo(() => {
    return menuItems.map((item) => (
      <MenuItem key={item.id} item={item} onClick={handleToggleMenu} />
    ));
  }, [handleToggleMenu]);

  return (
    <div>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>{renderedMenuItems}</ul>
      </div>
      {!isMenuOpen ? (
        <button className={styles.hamburgerButton} onClick={handleToggleMenu}>
          <img src="logo.png" width={60} height={60} alt="logo" />
        </button>
      ) : (
        <button className={styles.arrowLeftButton} onClick={handleToggleMenu}>
          <IoIosArrowBack size={40} color="white" />
        </button>
      )}
    </div>
  );
};
