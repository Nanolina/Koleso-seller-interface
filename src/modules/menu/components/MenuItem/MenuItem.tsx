import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../../types';
import styles from './MenuItem.module.css';

export const MenuItem: React.FC<{
  item: IMenuItem;
  onClick: (id: string) => void;
}> = React.memo(({ item, onClick }) => {
  const { t } = useTranslation();

  return (
    <li key={item.id} className={styles.item} onClick={() => onClick(item.id)}>
      <Link to={item.redirectPage} className={styles.item}>
        {item.icon}
        <b className={styles.text}>{t(`menuItems.${item.title}`)}</b>
      </Link>
    </li>
  );
});
