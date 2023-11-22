import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, getDataTable } from '../../../table';
import { initialProducts } from '../../data';

export const ProductsTable: React.FC = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<(string | number)[][]>([]);

  const headers = [
    t('products.table.articleKoleso'),
    t('products.table.articleSupplier'),
    t('products.table.title'),
    t('products.table.brand'),
    t('products.table.model'),
    t('products.table.image'),
    t('products.table.colors'),
    t('products.table.remainingSizes'),
    t('products.table.priceWithoutDiscount'),
    t('products.table.finalPrice'),
    t('products.table.remainingQuantity'),
  ];

  useEffect(() => {
    const dataTable = getDataTable(initialProducts);
    setProducts(dataTable);
  }, []);

  return <Table headers={headers} data={products} />;
};
