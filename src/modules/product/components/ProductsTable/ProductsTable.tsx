import { useTranslation } from 'react-i18next';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { initialProducts } from '../../data';
import { IProduct } from '../../types';

export const ProductsTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHeader>
        <HeaderCell></HeaderCell>
        <HeaderCell>{t('products.table.image')}</HeaderCell>
        <HeaderCell>{t('products.table.articleKoleso')}</HeaderCell>
        <HeaderCell>{t('products.table.title')}</HeaderCell>
        <HeaderCell>{t('products.table.brand')}</HeaderCell>
        <HeaderCell>{t('products.table.model')}</HeaderCell>
        <HeaderCell>{t('products.table.color')}</HeaderCell>
        <HeaderCell>{t('products.table.size')}</HeaderCell>
        <HeaderCell>{t('products.table.priceWithoutDiscount')}</HeaderCell>
        <HeaderCell>{t('products.table.finalPrice')}</HeaderCell>
        <HeaderCell>{t('products.table.remainingQuantity')}</HeaderCell>
      </TableHeader>

      <tbody>
        {initialProducts.map((product: IProduct, productIndex: number) => (
          <TableRow
            key={`row-${productIndex}`}
            rowIndex={productIndex}
            onClick={() => {}}
          >
            <TableCell cell={product.image} />
            <TableCell cell={product.articleKoleso} />
            <TableCell cell={product.title} />
            <TableCell cell={product.brand} />
            <TableCell cell={product.model} />
            <TableCell cell={t(`products.form.color.${product.color}`)} />
            <TableCell cell={product.size} />
            <TableCell cell={product.priceWithoutDiscount} />
            <TableCell cell={product.finalPrice} />
            <TableCell cell={product.remainingQuantity} />
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
