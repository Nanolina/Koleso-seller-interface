import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE } from '../../consts';
import i18n from '../../i18n/i18n';
import { CheckboxWithLabel } from '../CheckboxWithLabel/CheckboxWithLabel';
import { ICheckboxContainerProps, ICheckboxOption } from '../types';
import styles from './CheckboxContainer.module.css';

export const CheckboxContainer: React.FC<ICheckboxContainerProps> = React.memo(
  ({ options, type = '' }) => {
    const { t } = useTranslation();

    const [checkedItem, setCheckedItem] = useState<string>('');

    // Function for language change
    const changeLanguage = useCallback((language: string) => {
      i18n.changeLanguage(language); // Change the application language
    }, []);

    // Change handler for checkboxes
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        setCheckedItem(name); // Update the state of the selected item

        // If the type is a 'language', call the language change function
        if (type === LANGUAGE) {
          changeLanguage(name);
        }
      },
      [type, changeLanguage]
    );

    // Display a message if no options are provided
    if (!options || options.length === 0) {
      return <div className={styles.container}>{t('settings.noOptions')}</div>;
    }

    return (
      <div className={styles.container}>
        {options.map((option: ICheckboxOption) => (
          <CheckboxWithLabel
            key={option.name}
            label={option.label}
            checked={
              type === LANGUAGE
                ? i18n.language === option.name
                : checkedItem === option.name
            }
            onChange={handleChange}
            name={option.name}
          />
        ))}
      </div>
    );
  }
);
