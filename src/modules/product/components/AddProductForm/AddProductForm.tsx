import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { SelectLabel } from '../../../../components/SelectLabel/SelectLabel';
import { genders } from '../../../../data';
import { CatalogSelects } from '../../../catalog';
import { IComposition } from '../../../composition';
import { AddComposition } from '../../../composition/AddComposition/AddComposition';
import { AddSizeOption, ISizeOption } from '../../../size';

export const AddProductForm: React.FC = () => {
  const { t } = useTranslation();

  const [gender, setGender] = useState<string>('');
  const [selectedCompositions, setSelectedCompositions] = useState<
    IComposition[]
  >([]);
  const [selectedSizeOptions, setSelectedSizeOptions] = useState<ISizeOption[]>(
    []
  );

  return (
    <>
      <InputLabel
        label={t('products.form.title')}
        id="title"
        name="title"
        required
      />
      <CatalogSelects />
      <InputLabel label={t('products.table.brand')} id="brand" name="brand" />
      <InputLabel label={t('products.table.model')} id="model" name="model" />
      <InputLabel
        label={t('products.table.articleSupplier')}
        id="articleSupplier"
        name="articleSupplier"
        extraText={t('products.form.extraTextArticleSupplier')}
      />
      <InputLabel
        label={t('products.table.articleKoleso')}
        id="articleKoleso"
        name="articleKoleso"
        extraText={t('products.form.extraTextArticleKoleso')}
        required
      />
      <SelectLabel
        id="gender"
        name="gender"
        label={t('products.form.gender.label')}
        options={genders}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setGender(event.target.value)
        }
        value={gender}
        firstText={t('products.form.gender.select')}
        translationType="products.form.gender"
      />
      <AddComposition
        selectedCompositions={selectedCompositions}
        setSelectedCompositions={setSelectedCompositions}
      />
      <AddSizeOption
        selectedSizeOptions={selectedSizeOptions}
        setSelectedSizeOptions={setSelectedSizeOptions}
      />
    </>
  );
};
