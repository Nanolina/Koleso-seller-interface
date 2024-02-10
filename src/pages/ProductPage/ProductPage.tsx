import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductDetailsFormik } from '../../modules/product';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/products')}
        isSmallContainer
      >
        <Title text={t('products.addProduct')} />
        <ProductDetailsFormik />
      </Container>
    </>
  );
};
