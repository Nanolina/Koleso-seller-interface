import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { OrganizationForm } from '../../../modules/settings/organization';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsOrganizationPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/settings')}
        isSmallContainer
      >
        <Title text={t('settings.organization.label')} />
        <OrganizationForm />
      </Container>
    </>
  );
};
