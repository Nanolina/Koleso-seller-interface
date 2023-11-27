import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectLabel } from '../../../components/SelectLabel/SelectLabel';
import { sizes } from '../../../data';
import { IAddSizeProps, ISize } from '../types';

export const AddSize: React.FC<IAddSizeProps> = React.memo(
  ({ selectedSizes, setSelectedSizes }) => {
    const { t } = useTranslation();

    const handleAddSize = useCallback(
      (value: string) => {
        const existingSize = selectedSizes.find(
          (selectedSize) => selectedSize.size === value
        );

        if (existingSize) {
          return;
        }

        setSelectedSizes((prevSizes: ISize[]) => [
          ...prevSizes,
          { size: value, colors: [], quantity: 0 },
        ]);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [selectedSizes]
    );

    return (
      <SelectLabel
        id="size"
        name="size"
        label={t('products.form.size.label')}
        options={sizes}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleAddSize(event.target.value)
        }
        firstText={t('products.form.size.select')}
      />
    );
  }
);
