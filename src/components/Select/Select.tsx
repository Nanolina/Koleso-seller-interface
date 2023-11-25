import React from 'react';
import { useTranslation } from 'react-i18next';
import { ISelectProps } from '../types';
import styles from './Select.module.css';

export const Select: React.FC<ISelectProps> = React.memo(
  ({
    id,
    name,
    options,
    onChange,
    value,
    translationType,
    firstText,
  }) => {
    const { t } = useTranslation();

    return (
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={styles.select}
      >
        <option value="">{firstText}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {t(`${translationType}.${option.title}`)}
          </option>
        ))}
      </select>
    );
  }
);
