import { useState } from 'react';
import { SideMenu } from '../../modules/menu';
import { StoreDetailsForm } from '../../modules/stores';
import { Container } from '../../ui/Container/Container';

export const StorePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const { storeId } = useParams<{ storeId: string }>();

  // find storeName in Redux
  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        {/* <Title text={storeName} /> */}
        <StoreDetailsForm />
      </Container>
    </>
  );
};
