import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Select } from '../../../../../../components/Select/Select';
import { SIZES } from '../../../../../../consts';
import { Input } from '../../../../../../ui/Input/Input';
import { updateLocalStorage } from '../../../../functions';
import { IParameter, IParameterProps } from '../../../../types';
import styles from './Parameter.module.css';

export const Parameter: React.FC<IParameterProps> = React.memo(
  ({ parameter, values, setFieldValue }) => {
    const { t } = useTranslation();

    // Common function
    const updateParameter = (key: string, value: string | number) => {
      const newParameters = values.parameters.map((p) =>
        p.id === parameter.id ? { ...p, [key]: value } : p
      );
      setFieldValue('parameters', newParameters);
      updateLocalStorage(newParameters);
    };

    // Quantity
    const handleQuantityUpdate = (quantityValue: string) => {
      const quantity = parseInt(quantityValue, 10);
      if (!isFinite(quantity) || quantity <= 0) return;
      updateParameter('quantity', quantity);
    };

    // Size
    const handleSizeUpdate = (sizeValue: string) => {
      updateParameter('size', sizeValue);
    };

    // Remove
    const handleRemoveParameter = () => {
      const newParameters = values.parameters.filter(
        (p: IParameter) => p.id !== parameter.id
      );
      setFieldValue('parameters', newParameters);
      updateLocalStorage(newParameters);
    };

    // Copy
    const handleCopyParameter = () => {
      const existingParameter = values.parameters.find(
        (p: IParameter) => p.id === parameter.id
      );

      if (!existingParameter) {
        return;
      }

      const newParameter = { ...existingParameter, id: uuidv4() };
      console.log('newParameter', newParameter);

      const newParameters = [newParameter, ...values.parameters];
      console.log('newParameters', newParameters);

      setFieldValue('parameters', newParameters);
      updateLocalStorage(newParameters);
    };

    return (
      <div className={styles.container}>
        <div className={styles.parameter}>
          {t(`products.form.color.${parameter.color}`)}
        </div>
        <div className={styles.parameter}>
          <Input
            id={`${parameter.quantity}-${parameter.id}`}
            name="quantity"
            type="number"
            value={parameter.quantity || 0}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleQuantityUpdate(event.target.value);
            }}
            required
          />
        </div>
        <div className={styles.parameter}>
          <Select
            id={`${parameter.size}-${parameter.id}`}
            name="size"
            options={SIZES}
            value={parameter.size || ''}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handleSizeUpdate(event.target.value);
            }}
            firstText={t('products.form.size.select')}
          />
        </div>

        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={handleRemoveParameter}
          className={styles.iconRemove}
        />
        <MdContentCopy
          color="var(--dark-gray)"
          onClick={handleCopyParameter}
          className={styles.iconCopy}
        />
      </div>
    );
  }
);
