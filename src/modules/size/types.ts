import { SetStateAction } from '../../types';

export type ISize = {
  size: string;
  colors: string[];
  quantity: number;
};

type SizeHandler = SetStateAction<ISize[]>;

export type IAddSizeProps = {
  selectedSizes: ISize[];
  setSelectedSizes: SizeHandler;
};
