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
import { getFirstAvailableImage, getValuesForVariants } from '../../functions';
import { getExistingUniqueColors } from '../../imageForm';
import { IProduct } from '../../productForm';

export const ProductsTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const organizationId = useSelector(
    (state: IRootState) => state.user.organizationId
  );

  const {
    items: products,
    product,
    showDeleted,
    loading,
    error,
    success,
  } = useSelector((state: IRootState) => state.products);

  const navigateToProductDetails = (productId: string) => {
    navigate(`/product/${productId}/product`);
  };

  const recoverProduct = (
    productId: string,
    organizationId: string,
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    event.stopPropagation();
    dispatch(handleRecoverProduct({ id: productId, organizationId }));
  };

  useEffect(() => {
    dispatch(
      handleGetAllProducts({
        filter: { type: showDeleted ? 'deleted' : 'active' },
        organizationId,
      })
    );
  }, [dispatch, showDeleted, product, organizationId]);

  return (
    <>
      <Table>
        <TableHeader>
          {[
            '',
            'name',
            'brand',
            'model',
            'color',
            'finalPrice',
            'quantity',
            'size',
            'image',
            'articleKoleso',
            ...(showDeleted ? [''] : []),
          ].map((header, index) => (
            <HeaderCell key={index}>
              {header ? t(`products.product.table.${header}`) : null}
            </HeaderCell>
          ))}
        </TableHeader>

        <tbody>
          {products.map((product: IProduct, index: number) => (
            <TableRow
              key={product.id}
              rowIndex={index}
              onClick={(event: MouseEvent) => {
                if (!(event.target as HTMLElement).closest('.recoverIcon')) {
                  navigateToProductDetails(product.id);
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
              <TableCell cell={getFirstAvailableImage(product.variants)} />
              <TableCell
                cell={getValuesForVariants(product.variants, 'articleKoleso')}
              />
              {!product.isActive && (
                <TableCell
                  cell={
                    <RecoverIcon
                      tooltipText={t('products.product.recover')}
                      onClick={(event: React.MouseEvent<SVGSVGElement>) =>
                        recoverProduct(product.id, organizationId, event)
                      }
                    />
                  }
                />
              )}
            </TableRow>
          ))}
        </tbody>
      </Table>

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
      {loading && <Loader />}
    </>
  );
};
