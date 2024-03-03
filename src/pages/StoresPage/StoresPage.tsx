import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { StoresTable } from '../../modules/stores';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StoresPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleCloseSideMenu } = useSideMenu();

  const [showDeleted, setShowDeleted] = useState(false);

  const handleShowDeletedChange = useCallback(() => {
    setShowDeleted(!showDeleted);
  }, [showDeleted, setShowDeleted]);

  const handleAddStore = () => {
    navigate('/store/new');
  };

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Stores')} />
        <AddItemButton text={t('stores.addStore')} onClick={handleAddStore} />
        <Filter
          text={t('showDeleted')}
          checked={showDeleted}
          onChange={handleShowDeletedChange}
        />
        <StoresTable showDeleted={showDeleted} />
      </Container>
    </>
  );
};
