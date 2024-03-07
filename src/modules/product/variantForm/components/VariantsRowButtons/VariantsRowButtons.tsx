import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleRecoverVariant } from '../../../../../redux/thunks/product';
import { RecoverIcon } from '../../../../../ui/RecoverIcon/RecoverIcon';
import { TableCell } from '../../../../table';
import { IVariantsRowButtonsProps } from '../../types';
import useVariant from '../../useVariant';
import styles from './VariantsRowButtons.module.css';

export const VariantsRowButtons: React.FC<IVariantsRowButtonsProps> =
  React.memo(({ variant, values, handleCopyVariant, setFieldValue }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { showDeleted } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    const { handleRemoveVariant } = useVariant(values.variants, setFieldValue);

    return (
      <>
        {!showDeleted && (
          <TableCell
            cell={
              <div>
                <IoCloseOutline
                  color="var(--dark-gray)"
                  onClick={() => {
                    handleRemoveVariant(variant.id);
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
