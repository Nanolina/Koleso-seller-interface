import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { AddProductForm } from '../../modules/product';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const AddProductPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text='Добавить товар'/>
        <AddProductForm />
      </Container>
    </>
  );
};
