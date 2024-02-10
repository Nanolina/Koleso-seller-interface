import { useTranslation } from 'react-i18next';
import { SideMenu, useSideMenu } from '../../modules/menu';
import { OrdersTable } from '../../modules/orders';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const OrdersPage: React.FC = () => {
  const { t } = useTranslation();
  const { handleCloseSideMenu } = useSideMenu();

  return (
    <>
      <SideMenu />
      <Container onClick={handleCloseSideMenu}>
        <Title text={t('menuItems.Orders')} />
        <OrdersTable />
      </Container>
    </>
  );
};
