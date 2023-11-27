import { SetStateAction } from '../../types';

export type ISizeOption = {
  size: string;
  colors: string[];
  quantity: number;
};

export type SizeOptionsHandler = SetStateAction<ISizeOption[]>;

export type IAddSizeOptionProps = {
  selectedSizeOptions: ISizeOption[];
  setSelectedSizeOptions: SizeOptionsHandler;
};

export type IFinishedSizeOptionsProps = {
  selectedSizeOptions: ISizeOption[];
  setSelectedSizeOptions: SizeOptionsHandler;
};

export type IFinishedSizeOptionProps = {
  selectedSizeOptions: ISizeOption[];
  setSelectedSizeOptions: SizeOptionsHandler;
  sizeOption: ISizeOption;
  handleRemoveSizeOption: (size: string) => void;
};
