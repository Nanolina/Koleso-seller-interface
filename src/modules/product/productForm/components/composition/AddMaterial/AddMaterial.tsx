import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../../../../components/Select/Select';
import { COMPOSITIONS } from '../../../../../../consts';
import { Button } from '../../../../../../ui/Button/Button';
import { sortTranslatedEntities } from '../../../../functions';
import { addCompositionToValues } from '../../../handlers';
import { ICreateProductValuesProps } from '../../../types';
import { AddPercentage } from '../AddPercentage/AddPercentage';
import styles from './AddMaterial.module.css';

/**
 * Component to add a material with its percentage in a composition.
 * Allows selecting a material and defining its percentage in a composition.
 */
export const AddMaterial: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();

    // useState
    const [material, setMaterial] = useState<string>('');
    const [materialPercentage, setMaterialPercentage] = useState<number>(0);
    const [sortedMaterials, setSortedMaterials] = useState<
      { name: string; value: string }[]
    >([]);

    // Translate and sort materials
    useEffect(() => {
      const sortedTranslatedMaterials = sortTranslatedEntities(
        COMPOSITIONS,
        'products.form.composition',
        t
      );
      setSortedMaterials(sortedTranslatedMaterials);
    }, [t]);

    return (
      <div className={styles.container}>
        <Select
          id="material"
          name="material"
          options={sortedMaterials}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setMaterial(event.target.value)
          }
          value={material}
          firstText={t('products.form.composition.select')}
          isHalfWidth
        />
        <AddPercentage
          materialPercentage={materialPercentage}
          setMaterialPercentage={setMaterialPercentage}
          errors={errors}
          touched={touched}
        />
        <Button
          text={t('add')}
          type="button"
          disabled={!material || !materialPercentage}
          onClick={() =>
            addCompositionToValues(
              material,
              materialPercentage,
              values,
              setFieldValue
            )
          }
        />
      </div>
    );
  }
);
