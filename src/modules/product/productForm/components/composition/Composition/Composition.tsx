import React from 'react';
import { useTranslation } from 'react-i18next';
import { BoxWithCloseButton } from '../../../../../../components/BoxWithCloseButton/BoxWithCloseButton';
import { ICompositionProps } from '../../../types';
import styles from './Composition.module.css';

/**
 * Individual composition item display.
 * Shows the composition's title and percentage, and provides a way to remove it.
 */
export const Composition: React.FC<ICompositionProps> = React.memo(
  ({ material, handleRemoveCompositionElem }) => {
    const { t } = useTranslation();

    return (
      <div className={styles.container}>
        <BoxWithCloseButton
          onClick={() => handleRemoveCompositionElem(material.title)}
        >
          {t(`products.product.composition.${material.title}`)} -{' '}
          {material.percentage} %
        </BoxWithCloseButton>
      </div>
    );
  }
);
