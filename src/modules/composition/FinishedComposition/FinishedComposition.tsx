import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { IFinishedCompositionProps } from '../types';
import styles from './FinishedComposition.module.css';

/**
 * Individual composition item display.
 * Shows the composition's title and percentage, and provides a way to remove it.
 */
export const FinishedComposition: React.FC<IFinishedCompositionProps> =
  React.memo(({ material, handleRemoveComposition }) => {
    const { t } = useTranslation();

    return (
      <div className={styles.container}>
        <div className={styles.composition}>
          {t(`products.form.composition.${material.title}`)} -{' '}
          {material.percentage} %
        </div>
        <IoMdClose
          size={12}
          color="var(--dark-gray)"
          className={styles.iconClose}
          onClick={() => handleRemoveComposition(material.title)}
        />
      </div>
    );
  });
