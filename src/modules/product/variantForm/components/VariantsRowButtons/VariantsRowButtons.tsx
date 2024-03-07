import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../redux/rootReducer';
import { setVariantId } from '../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../redux/store';
import { handleRecoverVariant } from '../../../../../redux/thunks/product';
import { RecoverIcon } from '../../../../../ui/RecoverIcon/RecoverIcon';
import { TableCell } from '../../../../table';
import { IVariantsRowButtonsProps } from '../../types';
import styles from './VariantsRowButtons.module.css';

export const VariantsRowButtons: React.FC<IVariantsRowButtonsProps> =
  React.memo(({ variant, setModalOpen, handleCopyVariant }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { showDeleted } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    return (
      <>
        {!showDeleted && (
          <TableCell
            cell={
              <div>
                <IoCloseOutline
                  color="var(--dark-gray)"
                  onClick={() => {
                    setModalOpen(true);
                    dispatch(setVariantId(variant.id));
                  }}
                  className={styles.iconRemove}
                />
                <MdContentCopy
                  color="var(--dark-gray)"
                  onClick={() => handleCopyVariant(variant.id)}
                  className={styles.iconCopy}
                />
              </div>
            }
          />
        )}

        {showDeleted && (
          <TableCell
            cell={
              <RecoverIcon
                tooltipText={t('products.form.variants.recover')}
                onClick={() => dispatch(handleRecoverVariant(variant.id))}
              />
            }
          />
        )}
      </>
    );
  });
