import React from 'react';
import { useTranslation } from 'react-i18next';
import { BoxWithCloseButton } from '../../../components/BoxWithCloseButton/BoxWithCloseButton';
import { IFinishedColorProps } from '../types';

export const FinishedColor: React.FC<IFinishedColorProps> = React.memo(
  ({ color, handleRemoveColor }) => {
    const { t } = useTranslation();

    return (
      <BoxWithCloseButton onClick={handleRemoveColor}>
        {t(`products.form.color.${color}`)}
      </BoxWithCloseButton>
    );
  }
);
