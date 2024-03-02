import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW } from '../../consts';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { ProductDetailsTabs } from '../../modules/product';
import { IRootState } from '../../redux/rootReducer';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { handleCloseSideMenu } = useSideMenu();

  const { product, isProductFound } = useSelector(
    (state: IRootState) => state.products
  );

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/products')}
        isSmallContainer
      >
        {isProductFound ? (
          <>
            <Title
              text={
                product?.name && productId !== NEW
                  ? product?.name
                  : t('products.createProduct')
              }
            />

            <ProductDetailsTabs />
          </>
        ) : (
          <div className="itemNotFound">
            <Title text={t('products.productDetails.notFound')} />
          </div>
        )}
      </Container>
    </>
  );
};
