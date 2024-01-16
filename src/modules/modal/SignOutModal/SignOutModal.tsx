import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../../services';
import { Button } from '../../../ui/Button/Button';
import { Modal } from '../Modal/Modal';
import { ISignOutModalProps } from '../types';
import styles from './SignOutModal.module.css';

export const SignOutModal: React.FC<ISignOutModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Submit a request
      await AuthService.logout();
      localStorage.removeItem('token');
      navigate('/signup');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <div className={styles.container}>
        {t('modal.signOutModalContent')}
        <div className={styles.buttonContainer}>
          <Button text={t('yes')} onClick={handleSubmit} type="submit" />
        </div>
      </div>
    </Modal>
  );
};
