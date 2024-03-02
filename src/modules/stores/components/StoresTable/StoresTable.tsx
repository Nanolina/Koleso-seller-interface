import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleGetAllStores,
  handleRecoverStore,
} from '../../../../redux/thunks/store';
import { RecoverIcon } from '../../../../ui/RecoverIcon/RecoverIcon';
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

  const [showDeleted, setShowDeleted] = useState(false);

  const {
    items: stores,
    loading,
    error,
    success,
  } = useSelector((state: IRootState) => state.stores);

  const handleRecoverStoreClick = async (
    storeId: string,
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    event.stopPropagation();
    const resultAction = await dispatch(handleRecoverStore(storeId));
    const result = unwrapResult(resultAction);
    if (result) navigate(`/store/${storeId}`);
  };

  useEffect(() => {
    dispatch(
      handleGetAllStores({ filter: showDeleted ? 'deleted' : 'active' })
    );
  }, [dispatch, showDeleted]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Table showDeleted={showDeleted} setShowDeleted={setShowDeleted}>
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
                onClick={() => navigate(`/store/${store.id}`)}
              >
                <TableCell cell={store.name} />
                <TableCell cell={store.description} />
                <TableCell cell={store.image?.url} />
                {!store.isActive && (
                  <TableCell
                    cell={
                      <RecoverIcon
                        tooltipText={t('stores.recover')}
                        onClick={(event: React.MouseEvent<SVGSVGElement>) =>
                          handleRecoverStoreClick(store.id, event)
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
    </>
  );
};
