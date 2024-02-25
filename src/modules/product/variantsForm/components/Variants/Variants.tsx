import React from 'react';
import { IVariant, IVariantErrors, IVariantsProps } from '../../types';
import { Variant } from '../Variant/Variant';
import styles from './Variants.module.css';

export const Variants: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    return (
      <div className={styles.container}>
        {values.variants &&
          values.variants.map((variant: IVariant, index: number) => {
            const variantErrors: IVariantErrors | undefined = Array.isArray(
              errors.variants
            )
              ? (errors.variants[index] as IVariantErrors)
              : undefined;

            return (
              <Variant
                key={variant.id}
                variant={variant}
                values={values}
                setFieldValue={setFieldValue}
                errors={variantErrors || errors}
                touched={touched}
              />
            );
          })}
      </div>
    );
  }
);
