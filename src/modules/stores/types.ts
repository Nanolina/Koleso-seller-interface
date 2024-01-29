export interface ICreateStoreData {
  name: string;
  description?: string;
  logo?: string | null;
}

export interface IStore {
  id: string;
  name: string;
  description?: string;
  logo?: string | null;
}

export interface IStoresState {
  items: IStore[];
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IStoreDetailsFormProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
}
