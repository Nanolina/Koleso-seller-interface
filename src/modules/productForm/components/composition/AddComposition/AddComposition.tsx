import React from 'react';
import { useTranslation } from 'react-i18next';
import { Label } from '../../../../../ui/Label/Label';
import { AddMaterial } from '../AddMaterial/AddMaterial';
import { Compositions } from '../Compositions/Compositions';
import styles from './AddComposition.module.css';

/**
 * Component for adding new compositions.
 * Includes a material selection and setup for adding a new composition.
 */
export const AddComposition: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <Label id="material" text={t('products.form.composition.label')} />
        <AddMaterial />
      </div>
      <Compositions />
    </>
  );
};
