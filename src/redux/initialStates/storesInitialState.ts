import { IStoresState } from '../../modules/stores';

export const storeInitialState = {
  id: '',
  name: '',
  description: '',
  logo: '',
  logoPublicId: '',
};

export const storesInitialState: IStoresState = {
  items: [],
  store: storeInitialState,
  loading: false,
  success: null,
  error: null,
};
