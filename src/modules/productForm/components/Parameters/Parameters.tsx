import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { IParameter } from '../../types';
import { Parameter } from '../Parameter/Parameter';
import styles from './Parameters.module.css';

export const Parameters: React.FC = () => {
  const { t } = useTranslation();

  const parameters = useSelector(
    (state: IRootState) => state.productCreation.parameters
  );

  if (parameters.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerItem}>
          {`${t('products.form.parameters.colors')}*`}
        </div>
        <div className={styles.headerItem}>
          {`${t('products.form.parameters.quantity')}*`}
        </div>
        <div className={styles.headerItem}>
          {t('products.form.parameters.size')}
        </div>
      </div>
      {parameters.map((parameter: IParameter) => (
        <Parameter key={parameter.id} parameter={parameter} />
      ))}
    </div>
  );
};
