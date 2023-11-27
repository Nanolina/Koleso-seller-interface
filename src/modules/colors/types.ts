import { SetStateAction } from '../../types';
import { ISizeOption, SizeOptionsHandler } from '../size';

type ColorHandler = SetStateAction<string[]>;

export type IFinishedColorsProps = {
  selectedColors: string[];
  setSelectedColors: ColorHandler;
};

export type IAddColorProps = {
  sizeOption: ISizeOption;
  selectedSizeOptions: ISizeOption[];
  setSelectedSizeOptions: SizeOptionsHandler;
};

export type IFinishedColorProps = {
  color: string;
  handleRemoveColor: (color: string) => void;
};
