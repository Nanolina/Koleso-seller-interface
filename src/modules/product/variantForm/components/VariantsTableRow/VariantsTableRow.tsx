import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../../../../components/Select/Select';
import { SIZES } from '../../../../../consts';
import { TableCell, TableRow } from '../../../../table';
import { IVariantsTableRowProps } from '../../types';
import { VariantInput } from '../../ui/VariantInput/VariantInput';
import useVariant from '../../useVariant';
import { VariantsRowButtons } from '../VariantsRowButtons/VariantsRowButtons';

export const VariantsTableRow: React.FC<IVariantsTableRowProps> = React.memo(
  ({
    variant,
    index,
    values,
    setFieldValue,
    variantErrors,
    errors,
    touched,
  }) => {
    const { t } = useTranslation();

    // Handlers
    const { handleUpdateVariant, handleCopyVariant } = useVariant(
      values.variants,
      setFieldValue
    );

    const handleFieldUpdate = useCallback(
      (field: string, parser = (value: any) => value) =>
        (value: string) => {
          handleUpdateVariant(
            variant.id,
            field,
            value === '' ? '' : parser(value) || ''
          );
        },
      [handleUpdateVariant, variant.id]
    );

    const inputs = useMemo(
      () => [
        {
          name: 'quantity',
          type: 'number',
          parser: (value: string) => parseInt(value, 10),
          required: true,
        },
        {
          name: 'priceWithoutDiscount',
          type: 'number',
          parser: (value: string) => parseFloat(value),
          required: true,
        },
        {
          name: 'finalPrice',
          type: 'number',
          parser: (value: string) => parseFloat(value),
          required: true,
        },
        { name: 'articleSupplier', type: 'text', required: false },
      ],
      []
    );

    return (
      <TableRow key={`row-${index}`} rowIndex={index}>
        <TableCell
          cell={<h3>{t(`products.variants.color.${variant.color}`)}</h3>}
        />
        {inputs.map(({ name, type, parser, required }) => (
          <TableCell
            key={name}
            cell={
              <VariantInput
                variant={variant}
                name={name}
                type={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleFieldUpdate(name, parser)(e.target.value)
                }
                required={required}
                errors={variantErrors || errors}
                touched={touched}
              />
            }
          />
        ))}
        <TableCell
          cell={
            <Select
              id={`${variant.size}-${variant.id}`}
              name="size"
              options={SIZES}
              value={variant.size || ''}
              onChange={(e) => handleFieldUpdate('size')(e.target.value)}
              firstText={t('products.variants.size.select')}
            />
          }
        />
        {variant.articleKoleso ? (
          <TableCell cell={<h3>{variant.articleKoleso}</h3>} />
        ) : (
          <TableCell cell={<h3>{''}</h3>} />
        )}

        <VariantsRowButtons
          variant={variant}
          values={values}
          handleCopyVariant={handleCopyVariant}
          setFieldValue={setFieldValue}
        />
      </TableRow>
    );
  }
);
