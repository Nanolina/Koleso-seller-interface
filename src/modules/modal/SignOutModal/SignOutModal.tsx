import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../components/Loader/Loader';
import { MessageBox } from '../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../redux/rootReducer';
import { AppDispatch } from '../../../redux/store';
import { handleLogout } from '../../../redux/thunks/user';
import { Button } from '../../../ui/Button/Button';
import { Modal } from '../Modal/Modal';
import { ISignOutModalProps } from '../types';

export const SignOutModal: React.FC<ISignOutModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state: IRootState) => state.user);

  const handleSubmit = async () => {
    dispatch(handleLogout());
    navigate('/login');
  };

  if (loading) return <Loader />;

  if (error) {
    return <MessageBox errorMessage={error} />;
  }

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} isBig={false}>
      <div className="modalContainer">
        {t('modal.signOutModalContent')}
        <div className="buttonModalContainer">
          <Button text={t('yes')} onClick={handleSubmit} type="submit" />
        </div>
      </div>
    </Modal>
  );
};
