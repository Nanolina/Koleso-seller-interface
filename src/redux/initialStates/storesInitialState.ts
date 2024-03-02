import { IStoresState } from '../../modules/stores';

const imageInitialState = {
  id: '',
  url: '',
  publicId: '',
};

export const storeInitialState = {
  id: '',
  name: '',
  description: '',
  image: imageInitialState,
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const storesInitialState: IStoresState = {
  items: [],
  store: storeInitialState,
  isStoreFound: true,
  loading: false,
  success: null,
  error: null,
};
