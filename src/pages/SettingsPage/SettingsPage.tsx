import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';
import { Settings } from '../../modules/settings';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('menuItems.Settings')} />
        <Settings />
      </Container>
    </>
  );
};
