import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMenuOpen } from '../../../../redux/slices/menuSlice';
import { IMenuItem } from '../../types';
import styles from './MenuItem.module.css';

export const MenuItem: React.FC<{
  item: IMenuItem;
}> = React.memo(({ item }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Link to={item.redirectPage} className={styles.item}>
      <li
        key={item.id}
        className={styles.item}
        onClick={() => {
          dispatch(setMenuOpen(false));
        }}
      >
        {item.icon}
        <b className={styles.text}>{t(`menuItems.${item.title}`)}</b>
      </li>
    </Link>
  );
});
