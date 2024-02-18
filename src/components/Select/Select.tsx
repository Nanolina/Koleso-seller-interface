import React from 'react';
import { useTranslation } from 'react-i18next';
import { ISelectProps } from '../types';
import styles from './Select.module.css';

export const Select: React.FC<ISelectProps> = React.memo(
  ({ id, name, options, onChange, value, translationType, isHalfWidth }) => {
    const { t } = useTranslation();

    const getOptionText = (option: any) => {
      if (translationType && option.name) {
        return t(`${translationType}.${option.name}`);
      } else if (!translationType && option.name) {
        return option.name;
      } else if (translationType && !option.name) {
        return t(`${translationType}.${option}`);
      }

      return option;
    };

    return (
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={isHalfWidth ? styles.halfWidth : styles.select}
      >
        <option value=""></option>
        {options.map((option: any) => (
          <option key={option.id || option} value={option.id || option}>
            {getOptionText(option)}
          </option>
        ))}
      </select>
    );
  }
);
