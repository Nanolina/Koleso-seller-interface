import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextString } from '../../../../ui/TextString/TextString';
import { IArticleDetailsProps } from '../../types';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import styles from './ArticleDetails.module.css';

export const ArticleDetails: React.FC<IArticleDetailsProps> = React.memo(
  ({ articleDetails, index }) => {
    const {
      image,
      articleKoleso,
      articleSupplier,
      title,
      color,
      size,
      brand,
      quantity,
      unitPrice,
      totalPrice,
    } = articleDetails;

    const { t } = useTranslation();

    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>{index}</div>
          <img src={image} alt="Item" className={styles.image} />
          <ItemDetails
            articleKoleso={articleKoleso}
            articleSupplier={articleSupplier}
            title={title}
            color={color}
            size={size}
            brand={brand}
          />
        </div>
        <div className={styles.rightContainer}>
          <TextString label={t('orderDetails.quantity')} text={quantity} />
          <div className={styles.priceContainer}>
            <TextString label={t('orderDetails.unitPrice')} text={unitPrice} />
            <TextString
              label={t('orderDetails.totalPrice')}
              text={totalPrice}
            />
          </div>
        </div>
      </div>
    );
  }
);
