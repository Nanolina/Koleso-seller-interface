import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleGetAllProducts,
  handleRecoverProduct,
} from '../../../../redux/thunks/product';
import { RecoverIcon } from '../../../../ui/RecoverIcon/RecoverIcon';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { getValuesForVariants } from '../../functions';
import { getExistingUniqueColors } from '../../imageForm';
import { IProduct } from '../../productForm';

export const ProductsTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    items: products,
    product,
    showDeleted,
    loading,
    error,
    success,
  } = useSelector((state: IRootState) => state.products);

  const handleProductDetails = (productId: string) => {
    navigate(`/product/${productId}/product`);
  };

  const handleRecoverProductClick = async (productId: string, event: any) => {
    event.stopPropagation();
    await dispatch(handleRecoverProduct(productId));
  };

  useEffect(() => {
    dispatch(
      handleGetAllProducts({ filter: showDeleted ? 'deleted' : 'active' })
    );
  }, [dispatch, showDeleted, product]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <HeaderCell></HeaderCell>
          <HeaderCell>{t('products.table.name')}</HeaderCell>
          <HeaderCell>{t('products.table.brand')}</HeaderCell>
          <HeaderCell>{t('products.table.model')}</HeaderCell>
          <HeaderCell>{t('products.table.color')}</HeaderCell>
          <HeaderCell>{t('products.table.finalPrice')}</HeaderCell>
          <HeaderCell>{t('products.table.quantity')}</HeaderCell>
          <HeaderCell>{t('products.table.size')}</HeaderCell>
          <HeaderCell>{`${t('products.table.image')} 1`}</HeaderCell>
          <HeaderCell>{t('products.table.articleKoleso')}</HeaderCell>
          {showDeleted && <HeaderCell></HeaderCell>}
        </TableHeader>

        <tbody>
          {products &&
            products.map((product: IProduct, index: number) => {
              return (
                <TableRow
                  key={`row-${index}`}
                  rowIndex={index}
                  onClick={(event: MouseEvent) => {
                    if (
                      !(event.target as HTMLElement).closest('.recoverIcon')
                    ) {
                      handleProductDetails(product.id);
                    }
                  }}
                >
                  <TableCell cell={product.name} />
                  <TableCell cell={product.brand} />
                  <TableCell cell={product.model} />
                  <TableCell
                    cell={getExistingUniqueColors(product.variants).join(', ')}
                  />
                  <TableCell
                    cell={getValuesForVariants(product.variants, 'finalPrice')}
                  />
                  <TableCell
                    cell={getValuesForVariants(product.variants, 'quantity')}
                  />
                  <TableCell
                    cell={getValuesForVariants(product.variants, 'size')}
                  />
                  <TableCell cell={product.variants[0]?.images[0]?.url} />
                  <TableCell
                    cell={getValuesForVariants(
                      product.variants,
                      'articleKoleso'
                    )}
                  />
                  {!product.isActive && (
                    <TableCell
                      cell={
                        <RecoverIcon
                          tooltipText={t('products.recover')}
                          onClick={(event: React.MouseEvent<SVGSVGElement>) =>
                            handleRecoverProductClick(product.id, event)
                          }
                        />
                      }
                    />
                  )}
                </TableRow>
              );
            })}
        </tbody>
      </Table>

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
    </>
  );
};
