import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetAllStores } from '../../../../redux/thunks/store';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../table';
import { IStore } from '../../types';

export const StoresTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    items: stores,
    loading,
    error,
    success,
  } = useSelector((state: IRootState) => state.stores);

  const handleStoreDetails = (storeId: string) => {
    navigate(`/store/${storeId}`);
  };

  useEffect(() => {
    dispatch(handleGetAllStores());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <HeaderCell></HeaderCell>
          <HeaderCell>{t('stores.table.name')}</HeaderCell>
          <HeaderCell>{t('stores.table.description')}</HeaderCell>
          <HeaderCell>{t('stores.table.logo')}</HeaderCell>
        </TableHeader>

        <tbody>
          {stores &&
            stores.map((store: IStore, storeIndex: number) => (
              <TableRow
                key={store.id}
                rowIndex={storeIndex}
                onClick={() => handleStoreDetails(store.id)}
              >
                <TableCell cell={store.name} />
                <TableCell cell={store.description} />
                <TableCell cell={store.image?.url} />
              </TableRow>
            ))}
        </tbody>
      </Table>

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
    </>
  );
};
