import { useTranslation } from 'react-i18next';
import { Button } from '../../../ui/Button/Button';
import { Modal } from '../Modal/Modal';
import { IRemoveItemModalProps } from '../types';
import styles from './RemoveItemModal.module.css';

export const RemoveItemModal: React.FC<IRemoveItemModalProps> = ({
  text,
  extraText,
  onRemove,
  modalOpen,
  setModalOpen,
}) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} isBig={false}>
      <div className="modalContainer">
        <div className={styles.textContainer}>
          {text}
          <div className={styles.extraText}>{extraText}</div>
        </div>
        <div className="buttonModalContainer">
          <Button text={t('yes')} onClick={onRemove} type="submit" />
        </div>
      </div>
    </Modal>
  );
};
