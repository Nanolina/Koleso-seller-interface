import React from 'react';
import { useTranslation } from 'react-i18next';
import { ICreateProductValuesProps, IParameter } from '../../../../types';
import { Parameter } from '../Parameter/Parameter';
import styles from './Parameters.module.css';

export const Parameters: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();

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
        {/* {values.parameters &&
          values.parameters.map((parameter: IParameter) => (
            <Parameter
              key={parameter.id}
              parameter={parameter}
              values={values}
              setFieldValue={setFieldValue}
            />
          ))} */}
      </div>
    );
  }
);
