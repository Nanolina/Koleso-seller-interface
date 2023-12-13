import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <div className={styles.container}>
        {t('modal.signOutModalContent')}
        <div className={styles.buttonContainer}>
          <Button text={t('yes')} onClick={() => navigate('/login')} />
        </div>
      </div>
    </Modal>
  );
};
