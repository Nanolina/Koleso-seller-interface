import React from 'react';
import { useTranslation } from 'react-i18next';
import { IMenuItem } from '../../types';
import styles from './MenuItem.module.css';

export const MenuItem: React.FC<{
  item: IMenuItem;
  onClick: (id: string) => void;
}> = React.memo(({ item, onClick }) => {
  const { t } = useTranslation();

  return (
    <li key={item.id} className={styles.item} onClick={() => onClick(item.id)}>
      {item.icon}
      <b className={styles.text}>{t(`menuItems.${item.title}`)}</b>
    </li>
  );
});
