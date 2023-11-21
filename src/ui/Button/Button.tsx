import { IButtonProps } from '../../types';
import styles from './Button.module.css';

export const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  backgroundColor = 'var(--orange)',
  border = false,
  textColor = 'white',
  isBold = true,
  hasShadow = false,
}) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
    fontWeight: isBold ? 'bold' : 'normal',
    border: border ? `1px solid var(--main)` : 'none',
    boxShadow: hasShadow ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const textStyle = {
    color: textColor,
    fontWeight: isBold ? 'bold' : 'normal',
  };

  return (
    <button className={styles.container} onClick={onClick} style={buttonStyle}>
      <div style={textStyle}>{text}</div>
    </button>
  );
};
