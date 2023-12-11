export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ISignOutModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
