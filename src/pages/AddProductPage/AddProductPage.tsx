import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';
import { AddProductForm } from '../../modules/productForm';

export const AddProductPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('products.addProduct')} />
        <AddProductForm />
      </Container>
    </>
  );
};
