import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextString } from '../../../../ui/TextString/TextString';
import { IItemDetailsProps } from '../../types';

export const ItemDetails: React.FC<IItemDetailsProps> = React.memo(
  ({ articleKoleso, articleSupplier, title, color, size, brand }) => {
    const { t } = useTranslation();
    return (
      <div>
        <TextString
          label={t('orderDetails.articleKoleso')}
          text={articleKoleso}
        />
        <TextString
          label={t('orderDetails.articleSupplier')}
          text={articleSupplier}
        />
        <br />
        <TextString text={title} />
        <br />
        <TextString label={t('orderDetails.color')} text={color} />
        <TextString label={t('orderDetails.size')} text={size} />
        <TextString label={t('orderDetails.brand')} text={brand} />
      </div>
    );
  }
);
