import { useTranslation } from 'react-i18next';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { Settings } from '../../../modules/settings';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Settings')} />
        <Settings />
      </Container>
    </>
  );
};
