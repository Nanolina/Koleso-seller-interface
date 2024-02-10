import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import styles from './Logo.module.css';

export const Logo = ({ onClick }: any) => {
  const { isAuth, isVerifiedEmail, isActive } = useSelector(
    (state: IRootState) => state.user
  );

  return (
    <button
      onClick={onClick}
      className={
        isAuth && isVerifiedEmail && isActive
          ? styles.clickableButton
          : styles.notClickableButton
      }
    >
      <img src="../images/logo.png" alt="Logo" className={styles.image} />
    </button>
  );
};
