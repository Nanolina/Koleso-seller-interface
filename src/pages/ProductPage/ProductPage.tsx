import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { ProductDetailsForm } from '../../modules/product';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SideMenu />
      <Container isSmallContainer>
        <Title text={t('products.addProduct')} />
        <ProductDetailsForm />
      </Container>
    </>
  );
};
