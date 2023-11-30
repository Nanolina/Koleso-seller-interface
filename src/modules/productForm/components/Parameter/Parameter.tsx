import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Select } from '../../../../components/Select/Select';
import { SIZES } from '../../../../consts';
import {
  copyParameter,
  removeParameter,
  addOrUpdateParameter,
} from '../../../../redux/slices/productCreationSlice';
import { Input } from '../../../../ui/Input/Input';
import { IParameterProps } from '../../types';
import styles from './Parameter.module.css';

export const Parameter: React.FC<IParameterProps> = React.memo(
  ({ parameter }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleQuantityUpdate = useCallback(
      (id: string, quantityString: string) => {
        const quantity = parseInt(quantityString);
        dispatch(addOrUpdateParameter({ id, quantity }));
      },
      [dispatch]
    );

    const handleSizeUpdate = useCallback(
      (id: string, size: string) => {
        dispatch(addOrUpdateParameter({ id, size }));
      },
      [dispatch]
    );

    const handleRemoveParameter = useCallback(
      (id: string) => {
        dispatch(removeParameter(id));
      },
      [dispatch]
    );

    const handleCopyParameter = useCallback(
      (id: string) => {
        dispatch(copyParameter(id));
      },
      [dispatch]
    );

    return (
      <div className={styles.container}>
        <div className={styles.parameter}>
          {t(`products.form.color.${parameter.color}`)}
        </div>
        <div className={styles.parameter}>
          <Input
            type="number"
            value={parameter.quantity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleQuantityUpdate(parameter.id, event.target.value);
            }}
            required
          />
        </div>
        <div className={styles.parameter}>
          <Select
            options={SIZES}
            value={parameter.size}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handleSizeUpdate(parameter.id, event.target.value);
            }}
            firstText={t('products.form.size.select')}
          />
        </div>

        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={() => handleRemoveParameter(parameter.id)}
          className={styles.iconRemove}
        />
        <MdContentCopy
          color="var(--dark-gray)"
          onClick={() => handleCopyParameter(parameter.id)}
          className={styles.iconCopy}
        />
      </div>
    );
  }
);
