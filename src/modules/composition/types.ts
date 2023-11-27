import { SetStateAction } from '../../types';

type CompositionHandler = SetStateAction<IComposition[]>;

export type IComposition = {
  title: string;
  percentage: number;
};

export type IAddCompositionProps = {
  selectedCompositions: IComposition[];
  setSelectedCompositions: CompositionHandler;
};

export type IAddMaterialProps = {
  materialId: string;
  setMaterialId: SetStateAction<string>;
  selectedCompositions: IComposition[];
  setSelectedCompositions: CompositionHandler;
};

export type IAddPercentageProps = {
  materialPercentage: number;
  setMaterialPercentage: SetStateAction<number>;
};

export type IFinishedCompositionsProps = {
  selectedCompositions: IComposition[];
  setSelectedCompositions: CompositionHandler;
};

export type IFinishedCompositionProps = {
  material: IComposition;
  handleRemoveComposition: (title: string) => void;
};
