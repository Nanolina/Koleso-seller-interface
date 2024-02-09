import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from '../../modules/menu';
import { StoresTable } from '../../modules/stores';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StoresPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAddStore = () => {
    navigate('/store/new');
  };

  return (
    <>
      <SideMenu />
      <Container>
        <Title text={t('menuItems.Stores')} />
        <AddItemButton text={t('stores.addStore')} onClick={handleAddStore} />
        <StoresTable />
      </Container>
    </>
  );
};
