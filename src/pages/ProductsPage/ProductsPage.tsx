import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductsTable } from '../../modules/product';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { handleCloseSideMenu } = useSideMenu();

  const [showDeleted, setShowDeleted] = useState(false);

  const handleShowDeletedChange = useCallback(() => {
    setShowDeleted(!showDeleted);
  }, [showDeleted, setShowDeleted]);

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
          onChange={handleShowDeletedChange}
        />
        <ProductsTable showDeleted={showDeleted} />
      </Container>
    </>
  );
};
