import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { SelectLabel } from '../../../../components/SelectLabel/SelectLabel';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { GENDERS } from '../../../../consts';
import { RootState } from '../../../../redux/rootReducer';
import { Button } from '../../../../ui/Button/Button';
import { useProductForm } from '../../hooks/useProductForm';
import { AddParameters } from '../AddParameters/AddParameters';
import { CatalogSelects } from '../CatalogSelects/CatalogSelects';
import { AddComposition } from '../composition/AddComposition/AddComposition';
import { PhotoUpload } from '../photo/PhotoUpload/PhotoUpload';

export const AddProductForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    title,
    brand,
    model,
    articleSupplier,
    gender,
    description,
    oldPrice,
    price,
  } = useSelector((state: RootState) => state.productCreationStrings);

  const { handleChange } = useProductForm();

  return (
    <>
      <InputLabel
        label={t('products.form.title')}
        id="title"
        name="title"
        value={title}
        onChange={handleChange('title')}
        required
      />
      <CatalogSelects />
      <InputLabel
        label={t('products.table.brand')}
        id="brand"
        name="brand"
        value={brand}
        onChange={handleChange('brand')}
      />
      <InputLabel
        label={t('products.table.model')}
        id="model"
        name="model"
        value={model}
        onChange={handleChange('model')}
      />
      <InputLabel
        label={t('products.table.articleSupplier')}
        id="articleSupplier"
        name="articleSupplier"
        extraText={t('products.form.extraTextArticleSupplier')}
        value={articleSupplier}
        onChange={handleChange('articleSupplier')}
      />
      <SelectLabel
        id="gender"
        name="gender"
        label={t('products.form.gender.label')}
        options={GENDERS}
        onChange={handleChange('gender')}
        value={gender}
        firstText={t('products.form.gender.select')}
        translationType="products.form.gender"
      />
      <AddComposition />
      <AddParameters />
      <TextareaLabel
        label={t('products.form.description')}
        id="description"
        name="description"
        value={description}
        onChange={handleChange('description')}
        rows={8}
        required
      />
      <PhotoUpload />
      <InputLabel
        label={t('products.table.priceWithoutDiscount')}
        id="oldPrice"
        name="oldPrice"
        extraText={t('products.form.price.oldPriceExtra')}
        value={oldPrice}
        onChange={handleChange('oldPrice')}
        placeholder="0"
        required
      />
      <InputLabel
        label={t('products.table.finalPrice')}
        id="price"
        name="price"
        extraText={t('products.form.price.priceExtra')}
        value={price}
        onChange={handleChange('price')}
        placeholder="0"
        required
      />
      <Button text={t('products.addProduct')} onClick={() => {}} />
    </>
  );
};
