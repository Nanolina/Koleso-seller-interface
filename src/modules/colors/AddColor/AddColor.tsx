import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../components/Select/Select';
import { colors } from '../../../data';
import { ISizeOption } from '../../size';
import { FinishedColors } from '../FinishedColors/FinishedColors';
import { IAddColorProps } from '../types';
import styles from './AddColor.module.css';

export const AddColor: React.FC<IAddColorProps> = React.memo(
  ({ sizeOption, selectedSizeOptions, setSelectedSizeOptions }) => {
    const { t } = useTranslation();

    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    // Callback function to handle adding a color
    const handleAddColor = useCallback(
      (value: string) => {
        // Find the index of the selected sizeOption
        const index = selectedSizeOptions.findIndex(
          (sizeObj: ISizeOption) => sizeObj.size === sizeOption.size
        );

        // If the sizeOption exists in selectedSizeOptions
        if (index !== -1) {
          // Clone the sizeOption object to avoid mutation
          const updatedSizeOption = { ...selectedSizeOptions[index] };

          // Check if the selected color is not already in the colors array
          if (!updatedSizeOption.colors.includes(value)) {
            // Add the new color to the updatedSizeOption object's colors array
            updatedSizeOption.colors.push(value);

            // Update the selectedColors state with the new color
            setSelectedColors((prev) => [...prev, value]);

            // Update the selectedSizeOptions state with the updated sizeOption
            setSelectedSizeOptions((prevSizeOptions: ISizeOption[]) => {
              const newSelectedSizeOptions = [...prevSizeOptions];
              newSelectedSizeOptions[index] = updatedSizeOption;

              return newSelectedSizeOptions;
            });
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedSizeOptions, sizeOption.size]
    );

    return (
      <div className={styles.container}>
        <Select
          id="color"
          name="color"
          options={colors}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleAddColor(event.target.value)
          }
          firstText={t('products.form.color.select')}
          translationType="products.form.color"
        />
        <FinishedColors
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      </div>
    );
  }
);
