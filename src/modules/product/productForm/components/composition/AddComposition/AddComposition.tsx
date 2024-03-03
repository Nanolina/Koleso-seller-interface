import React from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '../../../../../../ui/Label/Label';
import { ICreateProductValuesProps } from '../../../types';
import { AddMaterial } from '../AddMaterial/AddMaterial';
import { Compositions } from '../Compositions/Compositions';
import styles from './AddComposition.module.css';

/**
 * Component for adding new compositions.
 * Includes a material selection and setup for adding a new composition.
 */
export const AddComposition: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();

    return (
      <>
        <div className={styles.container}>
          <Label id="material" text={t('products.form.composition.label')} />
          <AddMaterial
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
        </div>
        <Compositions
          values={values}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
      </>
    );
  }
);
