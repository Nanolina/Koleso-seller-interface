import { useTranslation } from 'react-i18next';
import { AddDocumentsForm } from '../../modules/documentsForm';
import { SideMenu } from '../../modules/menu';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const AddDocumentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SideMenu />
      <Container>
        <Title text={t('menuItems.Documents')} />
        <AddDocumentsForm />
      </Container>
    </>
  );
};
