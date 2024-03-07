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
      'products.table.color',
      'products.form.variants.quantity',
      {
        key: 'products.table.priceWithoutDiscount',
        extra: 'products.form.price.oldPriceExtra',
      },
      {
        key: 'products.table.finalPrice',
        extra: 'products.form.price.priceExtra',
      },
      {
        key: 'products.table.articleSupplier',
        extra: 'products.form.extraTextArticleSupplier',
      },
      'products.form.variants.size',
      'products.table.articleKoleso',
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
