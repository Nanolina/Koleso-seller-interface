export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  isBig?: boolean;
  children: React.ReactNode;
}

export interface ISignOutModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRemoveItemModalProps extends ISignOutModalProps {
  text: string;
  extraText: string;
  onRemove: any;
}
