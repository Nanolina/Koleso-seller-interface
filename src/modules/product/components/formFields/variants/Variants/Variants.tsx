import React from 'react';
import { IVariant, IVariantsProps } from '../../../../types';
import { Variant } from '../Variant/Variant';
import styles from './Variants.module.css';

export const Variants: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    return (
      <div className={styles.container}>
        {values.variants &&
          values.variants.map((variant: IVariant) => (
            <Variant
              key={variant.id}
              variant={variant}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
          ))}
      </div>
    );
  }
);
