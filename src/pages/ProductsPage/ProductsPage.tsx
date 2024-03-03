import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductsTable } from '../../modules/product';
import { IRootState } from '../../redux/rootReducer';
import { toggleShowDeleted } from '../../redux/slices/productsSlice';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleCloseSideMenu } = useSideMenu();
  const showDeleted = useSelector(
    (state: IRootState) => state.products.showDeleted
  );

  const handleCreateProduct = () => {
    navigate('/product/new/product');
  };

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Products')} />
        <AddItemButton
          text={t('products.createProduct')}
          onClick={handleCreateProduct}
        />
        <Filter
          text={t('showDeleted')}
          checked={showDeleted}
          onChange={() => dispatch(toggleShowDeleted())}
        />
        <ProductsTable />
      </Container>
    </>
  );
};
