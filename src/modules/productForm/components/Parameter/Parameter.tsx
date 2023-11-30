import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { Select } from '../../../../components/Select/Select';
import { SIZES } from '../../../../consts';
import { Input } from '../../../../ui/Input/Input';
import { useParameterHandlers } from '../../hooks/useParameterHandlers';
import { IParameterProps } from '../../types';
import styles from './Parameter.module.css';

export const Parameter: React.FC<IParameterProps> = React.memo(
  ({ parameter }) => {
    const { t } = useTranslation();
    const {
      handleQuantityUpdate,
      handleSizeUpdate,
      handleRemoveParameter,
      handleCopyParameter,
    } = useParameterHandlers(parameter.id);

    return (
      <div className={styles.container}>
        <div className={styles.parameter}>
          {t(`products.form.color.${parameter.color}`)}
        </div>
        <div className={styles.parameter}>
          <Input
            type="number"
            value={parameter.quantity || ''}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleQuantityUpdate(event.target.value);
            }}
            required
          />
        </div>
        <div className={styles.parameter}>
          <Select
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
          onClick={() => handleRemoveParameter()}
          className={styles.iconRemove}
        />
        <MdContentCopy
          color="var(--dark-gray)"
          onClick={() => handleCopyParameter()}
          className={styles.iconCopy}
        />
      </div>
    );
  }
);
