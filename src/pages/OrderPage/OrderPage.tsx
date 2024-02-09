import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { SideMenu } from '../../modules/menu';
import { OrderDetails } from '../../modules/orderDetails';
import { Container } from '../../ui/Container/Container';
import { Title } from '../../ui/Title/Title';

export const OrderPage: React.FC = () => {
  const { t } = useTranslation();
  const { orderNumber } = useParams<{ orderNumber: string }>();

  return (
    <>
      <SideMenu />
      <Container>
        <Title
          text={`${t('orderDetails.title')} №${orderNumber} from 03.09.2023`}
        />
        <OrderDetails />
      </Container>
    </>
  );
};
