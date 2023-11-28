import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SizeOption } from '../SizeOption/SizeOption';
import { IFinishedSizeOptionsProps, ISizeOption } from '../types';
import styles from './SizeOptions.module.css';

export const SizeOptions: React.FC<IFinishedSizeOptionsProps> = React.memo(
  ({ selectedSizeOptions, setSelectedSizeOptions }) => {
    const { t } = useTranslation();

    // Handler to remove a size option based on size
    const handleRemoveSizeOption = useCallback(
      (value: string) => {
        setSelectedSizeOptions(
          selectedSizeOptions.filter(
            (sizeOption: ISizeOption) => sizeOption.size !== value
          )
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedSizeOptions]
    );

    return (
      !!selectedSizeOptions.length && (
        <>
          <div className={styles.container}>
            <div className={styles.text}>
              {t('products.form.size.options.colors')}
            </div>
            <div className={styles.text}>
              {t('products.form.size.options.quantity')}
            </div>
          </div>
          {selectedSizeOptions.map((size: ISizeOption) => (
            <SizeOption
              key={size.size}
              selectedSizeOptions={selectedSizeOptions}
              setSelectedSizeOptions={setSelectedSizeOptions}
              sizeOption={size}
              handleRemoveSizeOption={handleRemoveSizeOption}
            />
          ))}
        </>
      )
    );
  }
);
