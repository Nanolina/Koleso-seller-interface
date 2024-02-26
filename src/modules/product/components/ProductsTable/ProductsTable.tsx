import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetAllProducts } from '../../../../redux/thunks/product';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { IProduct } from '../../productForm';

export const ProductsTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error, success } = useSelector(
    (state: IRootState) => state.products
  );

  const handleProductDetails = (productId: string) => {
    navigate(`/product/${productId}/product`);
  };

  useEffect(() => {
    dispatch(handleGetAllProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <HeaderCell></HeaderCell>
          {/* <HeaderCell>{t('products.table.image')}</HeaderCell>
          <HeaderCell>{t('products.table.articleKoleso')}</HeaderCell> */}
          <HeaderCell>{t('products.table.name')}</HeaderCell>
          <HeaderCell>{t('products.table.brand')}</HeaderCell>
          <HeaderCell>{t('products.table.model')}</HeaderCell>
          {/* <HeaderCell>{t('products.table.color')}</HeaderCell>
          <HeaderCell>{t('products.table.size')}</HeaderCell>
          <HeaderCell>{t('products.table.priceWithoutDiscount')}</HeaderCell>
          <HeaderCell>{t('products.table.finalPrice')}</HeaderCell>
          <HeaderCell>{t('products.table.quantity')}</HeaderCell> */}
        </TableHeader>

        <tbody>
          {items &&
            items.map((product: IProduct, productIndex: number) => (
              <TableRow
                key={`row-${productIndex}`}
                rowIndex={productIndex}
                onClick={() => handleProductDetails(product.id)}
              >
                {/* <TableCell cell={product.image} /> */}
                {/* <TableCell cell={product.articleKoleso} /> */}
                <TableCell cell={product.name} />
                <TableCell cell={product.brand} />
                <TableCell cell={product.model} />
                {/* <TableCell cell={t(`products.form.color.${product.color}`)} />
                <TableCell cell={product.size} />
                <TableCell cell={product.priceWithoutDiscount} />
                <TableCell cell={product.finalPrice} />
                <TableCell cell={product.quantity} /> */}
              </TableRow>
            ))}
        </tbody>
      </Table>

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
    </>
  );
};
