import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { CatalogSelects } from '../../../catalog';

export const AddProductForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <InputLabel
        label={t('products.form.title')}
        id="title"
        name="title"
        isHalfWidth={true}
        required
      />
      <CatalogSelects />
    </>
  );
};
