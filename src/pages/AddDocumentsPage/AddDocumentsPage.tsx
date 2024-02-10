import { useTranslation } from 'react-i18next';
import { AddDocumentsForm } from '../../modules/documentsForm';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const AddDocumentsPage: React.FC = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Documents')} />
        <AddDocumentsForm />
      </Container>
    </>
  );
};
