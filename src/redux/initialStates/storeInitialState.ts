import { IStoresState } from '../../modules/stores';

export const storesInitialState: IStoresState = {
  stores: [
    {
      id: '',
      name: '',
      description: '',
      logo: '',
    },
  ],
  loading: false,
  success: null,
  error: null,
};
