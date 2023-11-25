import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { CatalogSelects } from '../../../catalog';

export const AddProductForm: React.FC = () => {
  return (
    <>
      <InputLabel label="Название" id="title" isHalfWidth={true} required />
      <CatalogSelects />
    </>
  );
};
