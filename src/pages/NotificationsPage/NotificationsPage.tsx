import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { Notifications } from '../../modules/notifications';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SideMenu />
      <Container>
        <Title text={t('menuItems.Notifications')} />
        <Notifications />
      </Container>
    </>
  );
};
