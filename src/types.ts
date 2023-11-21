export interface ITitleProps {
  text: string;
}

export interface IButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  hasShadow?: boolean;
}
