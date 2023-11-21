import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../../../../components/SearchBar/SearchBar';
import { Button } from '../../../../ui/Button/Button';
import { Container } from '../../../../ui/Container/Container';
import { Title } from '../../../../ui/Title/Title';
import { SideMenu } from '../../../menu';
import styles from './Products.module.css';

export const Products: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleAddProduct = () => {
    console.log('Add Product Clicked');
  };

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('menuItems.Products')} />
        <SearchBar />
        <div className={styles.buttonContainer}>
          <Button text={t('products.addProduct')} onClick={handleAddProduct} />
        </div>
      </Container>
    </>
  );
};
