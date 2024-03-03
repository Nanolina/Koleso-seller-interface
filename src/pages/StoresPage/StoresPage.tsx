import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { StoresTable } from '../../modules/stores';
import { IRootState } from '../../redux/rootReducer';
import { toggleShowDeleted } from '../../redux/slices/storesSlice';
import { AddItemButton } from '../../ui/AddItemButton/AddItemButton';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StoresPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleCloseSideMenu } = useSideMenu();
  const showDeleted = useSelector(
    (state: IRootState) => state.stores.showDeleted
  );

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
          onChange={() => dispatch(toggleShowDeleted())}
        />
        <StoresTable />
      </Container>
    </>
  );
};
