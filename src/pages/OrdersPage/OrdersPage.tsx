import { useTranslation } from 'react-i18next';
import { SideMenu } from '../../modules/menu';
import { OrdersTable } from '../../modules/orders';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const OrdersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SideMenu />
      <Container>
        <Title text={t('menuItems.Orders')} />
        <OrdersTable />
      </Container>
    </>
  );
};
