import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/Loader/Loader';
import { IRootState } from '../../../redux/rootReducer';
import { AppDispatch } from '../../../redux/store';
import { handleLogout } from '../../../redux/thunks/user';
import { Button } from '../../../ui/Button/Button';
import { Modal } from '../Modal/Modal';
import { ISignOutModalProps } from '../types';
import styles from './SignOutModal.module.css';

export const SignOutModal: React.FC<ISignOutModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector((state: IRootState) => state.user.loading);

  const handleSubmit = async () => {
    dispatch(handleLogout());
  };

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

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
