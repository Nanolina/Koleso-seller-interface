import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../redux/store';
import { handleLogout } from '../../../redux/thunks/userThunks';
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
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    // Request to server
    dispatch(handleLogout());

    // Navigate to login page
    navigate('/login');
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
