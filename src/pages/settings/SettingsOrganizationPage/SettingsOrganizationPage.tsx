import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { OrganizationForm } from '../../../modules/settings/organization';
import { IRootState } from '../../../redux/rootReducer';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsOrganizationPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleCloseSideMenu } = useSideMenu();

  const { name } = useSelector(
    (state: IRootState) => state.organization.organization
  );

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/settings')}
        isSmallContainer
      >
        <Title text={name || t('settings.organization.create')} />
        <OrganizationForm />
      </Container>
    </>
  );
};
