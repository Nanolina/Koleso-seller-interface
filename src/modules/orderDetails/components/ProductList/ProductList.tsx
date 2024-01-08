import React from 'react';
import { IProduct } from '../../../orders/types';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

export const ProductList: React.FC<{ products: IProduct[] }> = React.memo(
  ({ products }) => {
    return (
      <>
        {products.map((articleDetails: IProduct, index: number) => (
          <ArticleDetails
            articleDetails={articleDetails}
            index={index + 1}
            key={articleDetails.id}
          />
        ))}
      </>
    );
  }
);
