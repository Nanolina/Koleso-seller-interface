import React, { useCallback } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { setMenuOpen, toggleMenu } from '../../../../redux/slices/menuSlice';
import { Logo } from '../../../../ui/Logo/Logo';
import { menuItems } from '../../menuItems';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './SideMenu.module.css';

export const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: IRootState) => state.menu.isMenuOpen);

  const { organizationId } = useSelector((state: IRootState) => state.user);

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  const renderedMenuItems = organizationId ? (
    menuItems.map((item) => <MenuItem key={item.id} item={item} />)
  ) : (
    // Show only settings
    <MenuItem key={menuItems[0].id} item={menuItems[0]} />
  );

  return (
    <>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>{renderedMenuItems}</ul>
      </div>
      {!isMenuOpen ? (
        <Logo onClick={handleToggleMenu} />
      ) : (
        <button
          className={styles.arrowLeftButton}
          onClick={() => dispatch(setMenuOpen(false))}
        >
          <IoIosArrowBack size={40} color="white" />
        </button>
      )}
    </>
  );
};
