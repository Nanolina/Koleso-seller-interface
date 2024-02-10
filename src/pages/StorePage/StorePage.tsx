import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { StoreDetailsFormik } from '../../modules/stores';
import { IRootState } from '../../redux/rootReducer';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StorePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();
  const { handleCloseSideMenu } = useSideMenu();

  const store = useSelector((state: IRootState) => state.stores.store);

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/stores')}
        isSmallContainer
      >
        <Title
          text={
            store?.name && storeId !== 'new'
              ? store?.name
              : t('stores.addStore')
          }
        />
        <StoreDetailsFormik />
      </Container>
    </>
  );
};
