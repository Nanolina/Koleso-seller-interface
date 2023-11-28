import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { SelectLabel } from '../../../../components/SelectLabel/SelectLabel';
import { GENDERS } from '../../../../consts';
import { RootState } from '../../../../redux/rootReducer';
import { useProductForm } from '../../hooks/useProductForm';
import { AddParameters } from '../AddParameters/AddParameters';
import { CatalogSelects } from '../CatalogSelects/CatalogSelects';
import { AddComposition } from '../composition/AddComposition/AddComposition';

export const AddProductForm: React.FC = () => {
  const { t } = useTranslation();

  const { title, brand, model, articleSupplier, gender } = useSelector(
    (state: RootState) => state.productCreationStrings
  );

  const { handleInputChange, handleSelectChange } = useProductForm();

  return (
    <>
      <InputLabel
        label={t('products.form.title')}
        id="title"
        name="title"
        value={title}
        onChange={handleInputChange('title')}
        required
      />
      <CatalogSelects />
      <InputLabel
        label={t('products.table.brand')}
        id="brand"
        name="brand"
        value={brand}
        onChange={handleInputChange('brand')}
      />
      <InputLabel
        label={t('products.table.model')}
        id="model"
        name="model"
        value={model}
        onChange={handleInputChange('model')}
      />
      <InputLabel
        label={t('products.table.articleSupplier')}
        id="articleSupplier"
        name="articleSupplier"
        extraText={t('products.form.extraTextArticleSupplier')}
        value={articleSupplier}
        onChange={handleInputChange('articleSupplier')}
      />
      <SelectLabel
        id="gender"
        name="gender"
        label={t('products.form.gender.label')}
        options={GENDERS}
        onChange={handleSelectChange('gender')}
        value={gender}
        firstText={t('products.form.gender.select')}
        translationType="products.form.gender"
      />
      <AddComposition />
      <AddParameters />
    </>
  );
};
