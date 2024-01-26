import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { mockStores } from '../../data';
import { IStore } from '../../types';

export const StoresTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStoreDetails = (storeId: string) => {
    navigate(`/store/${storeId}`);
  };

  return (
    <Table>
      <TableHeader>
        <HeaderCell></HeaderCell>
        <HeaderCell>{t('stores.table.name')}</HeaderCell>
        <HeaderCell>{t('stores.table.description')}</HeaderCell>
        <HeaderCell>{t('stores.table.logo')}</HeaderCell>
      </TableHeader>

      <tbody>
        {mockStores.map((store: IStore, storeIndex: number) => (
          <TableRow
            key={store.id}
            rowIndex={storeIndex}
            onClick={() => handleStoreDetails(store.id)}
          >
            <TableCell cell={store.name} />
            <TableCell cell={store.description} />
            <TableCell cell={store.logo} />
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
