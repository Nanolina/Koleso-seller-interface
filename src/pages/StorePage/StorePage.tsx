import { SideMenu } from '../../modules/menu';
import { StoreDetailsForm } from '../../modules/stores';
import { Container } from '../../ui/Container/Container';

export const StorePage: React.FC = () => {
  return (
    <>
      <SideMenu />
      <Container isSmallContainer>
        <StoreDetailsForm />
      </Container>
    </>
  );
};
