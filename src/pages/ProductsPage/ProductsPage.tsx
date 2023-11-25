import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SideMenu } from '../../modules/menu';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';
import styles from './ProductsPage.module.css';
import { ProductsTable } from '../../modules/product';
import { useNavigate } from 'react-router-dom';

export const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleAddProduct = () => {
    navigate('/add-product');
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
        <ProductsTable />
      </Container>
    </>
  );
};
