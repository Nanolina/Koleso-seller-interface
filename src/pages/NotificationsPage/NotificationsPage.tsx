import { useTranslation } from 'react-i18next';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { Notifications } from '../../modules/notifications';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Notifications')} />
        <Notifications />
      </Container>
    </>
  );
};
