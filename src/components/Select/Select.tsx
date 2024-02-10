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
    isHalfWidth,
  }) => {
    const { t } = useTranslation();

    return (
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={isHalfWidth ? styles.halfWidth : styles.select}
      >
        <option value=""></option>
        {options.map((option: any) =>
          option.id ? (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ) : (
            <option key={option} value={option}>
              {translationType ? t(`${translationType}.${option}`) : option}
            </option>
          )
        )}
      </select>
    );
  }
);
