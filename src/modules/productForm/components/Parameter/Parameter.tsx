import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Select } from '../../../../components/Select/Select';
import { SIZES } from '../../../../data';
import { updateParameter } from '../../../../redux/slices/productCreationSlice';
import { IParameter } from '../../../../types';
import { Input } from '../../../../ui/Input/Input';
import styles from './Parameter.module.css';

export const Parameter: React.FC<{ parameter: IParameter }> = React.memo(
  ({ parameter }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleQuantityUpdate = (id: string, quantityString: string) => {
      const quantity = parseInt(quantityString);

      dispatch(
        updateParameter({
          id,
          quantity,
        })
      );
    };

    const handleSizeUpdate = (id: string, size: string) => {
      dispatch(
        updateParameter({
          id,
          size,
        })
      );
    };

    return (
      <div className={styles.container}>
        <div className={styles.parameter}>
          {t(`products.form.color.${parameter.color}`)}
        </div>
        <div className={styles.parameter}>
          <Input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleQuantityUpdate(parameter.id, event.target.value);
            }}
          />
        </div>
        <div className={styles.parameter}>
          <Select
            options={SIZES}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handleSizeUpdate(parameter.id, event.target.value);
            }}
            firstText={t('products.form.size.select')}
          />
        </div>
      </div>
    );
  }
);
