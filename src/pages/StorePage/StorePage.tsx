import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW } from '../../consts';
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

  const { store, isStoreFound } = useSelector(
    (state: IRootState) => state.stores
  );

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/stores')}
        isSmallContainer
      >
        {isStoreFound ? (
          <>
            <Title
              text={
                store?.name && storeId !== NEW
                  ? store?.name
                  : t('stores.create')
              }
            />
            <StoreDetailsFormik />
          </>
        ) : (
          <div className="itemNotFound">
            <Title text={t('stores.notFound')} />
          </div>
        )}
      </Container>
    </>
  );
};
