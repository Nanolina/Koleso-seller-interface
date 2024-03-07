import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { IRootState } from '../../../../../redux/rootReducer';
import { HeaderCell, Table, TableHeader } from '../../../../table';
import { IVariant, IVariantErrors, IVariantsProps } from '../../types';
import { VariantsTableRow } from '../VariantsTableRow/VariantsTableRow';

export const VariantsTable: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();

    const { showDeleted, loading } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    const headerCells = [
      '',
      'products.product.table.color',
      'products.variants.quantity',
      {
        key: 'products.product.table.priceWithoutDiscount',
        extra: 'products.variants.price.oldPriceExtra',
      },
      {
        key: 'products.product.table.finalPrice',
        extra: 'products.variants.price.finalPriceExtra',
      },
      {
        key: 'products.product.table.articleSupplier',
        extra: 'products.variants.extraTextArticleSupplier',
      },
      'products.variants.size.label',
      'products.product.table.articleKoleso',
    ];

    return (
      <>
        <Table>
          <TableHeader>
            {headerCells.map((cell, index) => (
              <HeaderCell
                key={index}
                extraText={typeof cell === 'object' ? t(cell.extra) : undefined}
              >
                {typeof cell === 'string' ? t(cell) : t(cell.key)}
              </HeaderCell>
            ))}
            {showDeleted && <HeaderCell />}
          </TableHeader>

          <tbody>
            {values.variants.map((variant: IVariant, index: number) => {
              const variantErrors: IVariantErrors | undefined = Array.isArray(
                errors.variants
              )
                ? (errors.variants[index] as IVariantErrors)
                : undefined;

              return (
                <VariantsTableRow
                  key={variant.id}
                  variant={variant}
                  index={index}
                  values={values}
                  setFieldValue={setFieldValue}
                  variantErrors={variantErrors}
                  errors={errors}
                  touched={touched}
                />
              );
            })}
          </tbody>
        </Table>

        {loading && <Loader />}
      </>
    );
  }
);
