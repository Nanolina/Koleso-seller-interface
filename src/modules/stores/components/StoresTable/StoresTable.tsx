import React, { useEffect } from 'react';
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

  const {
    items: stores,
    store,
    showDeleted,
    loading,
    error,
    success,
  } = useSelector((state: IRootState) => state.stores);

  const recoverStore = async (storeId: string, event: any) => {
    event.stopPropagation();
    await dispatch(handleRecoverStore(storeId));
  };

  useEffect(() => {
    dispatch(handleGetAllStores({ type: showDeleted ? 'deleted' : 'active' }));
  }, [dispatch, showDeleted, store]);

  return (
    <>
      <Table>
        <TableHeader>
          {[
            '',
            'name',
            'description',
            'image',
            ...(showDeleted ? [''] : []),
          ].map((header, index) => (
            <HeaderCell key={index}>
              {header ? t(`stores.table.${header}`) : null}
            </HeaderCell>
          ))}
        </TableHeader>

        <tbody>
          {stores &&
            stores.map((store: IStore, storeIndex: number) => (
              <TableRow
                key={store.id}
                rowIndex={storeIndex}
                onClick={(event: MouseEvent) => {
                  if (!(event.target as HTMLElement).closest('.recoverIcon')) {
                    navigate(`/store/${store.id}`);
                  }
                }}
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
                          recoverStore(store.id, event)
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
