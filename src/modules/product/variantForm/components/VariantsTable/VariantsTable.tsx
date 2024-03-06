import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoCloseOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { Select } from '../../../../../components/Select/Select';
import { SIZES } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { setVariantId } from '../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../redux/store';
import { handleRecoverVariant } from '../../../../../redux/thunks/product';
import { Input } from '../../../../../ui/Input/Input';
import { RecoverIcon } from '../../../../../ui/RecoverIcon/RecoverIcon';
import {
  HeaderCell,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../../table';
import { IVariant, IVariantErrors, IVariantsTableProps } from '../../types';
import useVariant from '../../useVariant';
import styles from './VariantsTable.module.css';

export const VariantsTable: React.FC<IVariantsTableProps> = React.memo(
  ({ values, setFieldValue, errors, touched, modalOpen, setModalOpen }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { showDeleted, loading } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    const { handleUpdateVariant, handleCopyVariant } = useVariant(
      values.variants,
      setFieldValue
    );

    // Quantity
    const handleQuantityUpdate = (quantityValue: string, variant: IVariant) => {
      handleUpdateVariant(
        variant.id,
        'quantity',
        quantityValue === '' ? '' : parseInt(quantityValue, 10) || ''
      );
    };

    // Size
    const handleSizeUpdate = (sizeValue: string, variant: IVariant) => {
      handleUpdateVariant(variant.id, 'size', sizeValue);
    };

    // Price
    const handlePriceWithoutDiscountUpdate = (
      priceValue: string,
      variant: IVariant
    ) => {
      handleUpdateVariant(
        variant.id,
        'priceWithoutDiscount',
        priceValue === '' ? '' : parseFloat(priceValue) || ''
      );
    };

    const handleFinalPriceUpdate = (priceValue: string, variant: IVariant) => {
      handleUpdateVariant(
        variant.id,
        'finalPrice',
        priceValue === '' ? '' : parseFloat(priceValue) || ''
      );
    };

    // Article supplier
    const handleArticleSupplierUpdate = (
      articleValue: string,
      variant: IVariant
    ) => {
      handleUpdateVariant(variant.id, 'articleSupplier', articleValue);
    };

    return (
      <Table>
        <TableHeader>
          <HeaderCell></HeaderCell>
          <HeaderCell>{t('products.table.color')}</HeaderCell>
          <HeaderCell>{t('products.form.variants.quantity')}</HeaderCell>
          <HeaderCell>{t('products.form.variants.size')}</HeaderCell>
          <HeaderCell extraText={t('products.form.price.oldPriceExtra')}>
            {t('products.table.priceWithoutDiscount')}
          </HeaderCell>
          <HeaderCell extraText={t('products.form.price.priceExtra')}>
            {t('products.table.finalPrice')}
          </HeaderCell>
          <HeaderCell extraText={t('products.form.extraTextArticleSupplier')}>
            {t('products.table.articleSupplier')}
          </HeaderCell>
          <HeaderCell>{t('products.table.articleKoleso')}</HeaderCell>
          {showDeleted && <HeaderCell></HeaderCell>}
        </TableHeader>

        {loading && <Loader />}

        <tbody>
          {values.variants &&
            values.variants.map((variant: IVariant, index: number) => {
              const variantErrors: IVariantErrors | undefined = Array.isArray(
                errors.variants
              )
                ? (errors.variants[index] as IVariantErrors)
                : undefined;

              return (
                <TableRow key={`row-${index}`} rowIndex={index}>
                  <TableCell
                    cell={<h3>{t(`products.form.color.${variant.color}`)}</h3>}
                  />
                  <TableCell
                    cell={
                      <Input
                        id={`${variant.quantity}-${variant.id}`}
                        name="quantity"
                        type="number"
                        value={variant.quantity}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleQuantityUpdate(event.target.value, variant)}
                        errors={variantErrors || errors}
                        touched={touched}
                        required
                        isInputAbsolute
                        isErrorSmall
                      />
                    }
                  />
                  <TableCell
                    cell={
                      <Select
                        id={`${variant.size}-${variant.id}`}
                        name="size"
                        options={SIZES}
                        value={variant.size || ''}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => handleSizeUpdate(event.target.value, variant)}
                        firstText={t('products.form.size.select')}
                      />
                    }
                  />
                  <TableCell
                    cell={
                      <Input
                        id={`${variant.priceWithoutDiscount}-${variant.id}`}
                        name="priceWithoutDiscount"
                        type="number"
                        value={variant.priceWithoutDiscount}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                          handlePriceWithoutDiscountUpdate(
                            event.target.value,
                            variant
                          )
                        }
                        errors={variantErrors || errors}
                        touched={touched}
                        required
                        isInputAbsolute
                        isErrorSmall
                      />
                    }
                  />
                  <TableCell
                    cell={
                      <Input
                        id={`${variant.finalPrice}-${variant.id}`}
                        name="finalPrice"
                        type="number"
                        value={variant.finalPrice}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                          handleFinalPriceUpdate(event.target.value, variant)
                        }
                        errors={variantErrors || errors}
                        touched={touched}
                        required
                        isInputAbsolute
                        isErrorSmall
                      />
                    }
                  />
                  <TableCell
                    cell={
                      <Input
                        id="articleSupplier"
                        name="articleSupplier"
                        value={variant.articleSupplier}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                          handleArticleSupplierUpdate(
                            event.target.value,
                            variant
                          )
                        }
                        errors={variantErrors || errors}
                        touched={touched}
                        isInputAbsolute
                        isErrorSmall
                      />
                    }
                  />
                  {variant.articleKoleso ? (
                    <TableCell cell={<h3>{variant.articleKoleso}</h3>} />
                  ) : (
                    <TableCell cell={<h3>{''}</h3>} />
                  )}

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
                          onClick={() =>
                            dispatch(handleRecoverVariant(variant.id))
                          }
                        />
                      }
                    />
                  )}
                </TableRow>
              );
            })}
        </tbody>
      </Table>
    );
  }
);
