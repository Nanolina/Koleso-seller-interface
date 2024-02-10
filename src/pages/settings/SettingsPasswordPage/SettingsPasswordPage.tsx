import { useTranslation } from 'react-i18next';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { ChangePassword } from '../../../modules/settings';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsPasswordPage = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('settings.password.changePassword')} />
        <ChangePassword />
      </Container>
    </>
  );
};
