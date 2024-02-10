import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { StoreDetailsForm } from '../../modules/stores';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const StorePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/stores')}
        isSmallContainer
      >
        <Title text={t('stores.addStore')} />
        <StoreDetailsForm />
      </Container>
    </>
  );
};
