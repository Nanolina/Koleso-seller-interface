import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../../modules/menu';
import { Container } from '../../../ui/Container/Container';
import { Input } from '../../../ui/Input/Input';
import { Title } from '../../../ui/Title/Title';

export const SettingsEmailPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');

  return (
    <>
      <SideMenu />
      <Container>
        <Title text={t('settings.email')} />
        <Input
          type="email"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
        />
      </Container>
    </>
  );
};
