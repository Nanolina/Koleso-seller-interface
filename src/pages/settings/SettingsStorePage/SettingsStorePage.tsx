import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../../modules/menu';
import { StoreInformation } from '../../../modules/settings';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsStorePage = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('settings.store.label')} />
        <StoreInformation />
      </Container>
    </>
  );
};
