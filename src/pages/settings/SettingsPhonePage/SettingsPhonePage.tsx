import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../../modules/menu';
import { Container } from '../../../ui/Container/Container';
import { Input } from '../../../ui/Input/Input';
import { Title } from '../../../ui/Title/Title';

export const SettingsPhonePage = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('settings.phone')} />
        <Input
          value={phone}
          onChange={(event: any) => setPhone(event.target.value)}
          type="tel"
        />
      </Container>
    </>
  );
};
