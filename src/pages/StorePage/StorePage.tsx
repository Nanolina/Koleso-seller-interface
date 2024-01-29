import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from '../../modules/menu';
import { Modal } from '../../modules/modal/Modal/Modal';
import { StoreDetailsForm } from '../../modules/stores';
import { Container } from '../../ui/Container/Container';

export const StorePage: React.FC = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
    navigate('/stores');
  };

  useEffect(() => {
    if (modalOpen) setIsMenuOpen(false);
  }, [modalOpen]);

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Container onClick={() => setIsMenuOpen(false)}>
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <StoreDetailsForm
            modalOpen={modalOpen}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      </Container>
    </>
  );
};
