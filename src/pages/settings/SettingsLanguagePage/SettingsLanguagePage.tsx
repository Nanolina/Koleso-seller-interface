import { useTranslation } from 'react-i18next';
import { CheckboxContainer } from '../../../components/CheckboxContainer/CheckboxContainer';
import { LANGUAGE } from '../../../consts';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { Container } from '../../../ui/Container/Container';
import { Title } from '../../../ui/Title/Title';

export const SettingsLanguagePage = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  const options = [
    { name: 'English', label: t('English') },
    { name: 'Russian', label: t('Russian') },
  ];

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('settings.language')} />
        <CheckboxContainer options={options} type={LANGUAGE} />
      </Container>
    </>
  );
};
