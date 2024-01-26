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
  stores: IStore[];
  success: string | null;
  loading: boolean;
  error: any;
}
