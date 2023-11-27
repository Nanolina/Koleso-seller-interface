import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectLabel } from '../../../components/SelectLabel/SelectLabel';
import { sizes } from '../../../data';
import { SizeOptions } from '../SizeOptions/SizeOptions';
import { IAddSizeOptionProps, ISizeOption } from '../types';

export const AddSizeOption: React.FC<IAddSizeOptionProps> = React.memo(
  ({ selectedSizeOptions, setSelectedSizeOptions }) => {
    const { t } = useTranslation();

    // Callback function to handle adding a new size option
    const handleAddSizeOption = useCallback(
      (value: string) => {
        // Check if the selected size option already exists in the list
        const existingSizeOption = selectedSizeOptions.find(
          (selectedSizeOption) => selectedSizeOption.size === value
        );

        // If it already exists, do nothing
        if (existingSizeOption) {
          return;
        }

        // Add a new size option to the selectedSizeOptions list
        setSelectedSizeOptions((prevSizeOptions: ISizeOption[]) => [
          ...prevSizeOptions,
          { size: value, colors: [], quantity: 0 },
        ]);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedSizeOptions]
    );

    return (
      <>
        <SelectLabel
          id="size"
          name="size"
          label={t('products.form.size.label')}
          options={sizes}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleAddSizeOption(event.target.value)
          }
          firstText={t('products.form.size.select')}
        />
        <SizeOptions
          selectedSizeOptions={selectedSizeOptions}
          setSelectedSizeOptions={setSelectedSizeOptions}
        />
      </>
    );
  }
);
