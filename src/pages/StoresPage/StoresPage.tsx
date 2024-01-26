import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from '../../modules/menu';
import { StoresTable } from '../../modules/stores';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StoresPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleAddStore = () => {
    navigate('/store/new');
  };

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('menuItems.Stores')} />
        <div className="buttonAddSmthPageContainer">
          <Button text={t('stores.addStore')} onClick={handleAddStore} />
        </div>
        <StoresTable />
      </Container>
    </>
  );
};
