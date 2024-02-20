import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW } from '../../consts';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductDetailsFormik } from '../../modules/product';
import { IRootState } from '../../redux/rootReducer';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { handleCloseSideMenu } = useSideMenu();

  const product = useSelector((state: IRootState) => state.products.product);

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/products')}
        isSmallContainer
      >
        <Title
          text={
            product?.name && productId !== NEW
              ? product?.name
              : t('products.addProduct')
          }
        />
        <ProductDetailsFormik />
      </Container>
    </>
  );
};
