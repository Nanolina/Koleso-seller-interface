import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductsTable } from '../../modules/product';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { handleCloseSideMenu } = useSideMenu();

  const handleAddProduct = () => {
    navigate('/product/new');
  };

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Products')} />
        <SearchBar />
        <AddItemButton
          text={t('products.addProduct')}
          onClick={handleAddProduct}
        />
        <ProductsTable />
      </Container>
    </>
  );
};
