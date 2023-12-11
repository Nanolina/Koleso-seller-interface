import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckboxContainer } from '../../../components/CheckboxContainer/CheckboxContainer';
import { LANGUAGE } from '../../../consts';
import { SideMenu } from '../../../modules/menu';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsLanguagePage = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const options = [
    { name: 'English', label: t('English') },
    { name: 'Russian', label: t('Russian') },
  ];

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Title text={t('settings.language')} />
        <CheckboxContainer options={options} type={LANGUAGE} />
      </Container>
    </>
  );
};
