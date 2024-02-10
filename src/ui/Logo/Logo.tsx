import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/rootReducer';
import styles from './Logo.module.css';

const logoSize = '60';

export const Logo = ({ onClick }: any) => {
  const { isAuth } = useSelector((state: IRootState) => state.user);
console.log('Logo');
  return (
    <button
      onClick={onClick}
      className={isAuth ? styles.authButton : styles.notAuthButton}
    >
      <img src="../images/logo.png" alt="Logo" width={logoSize} height={logoSize} />
    </button>
  );
};
