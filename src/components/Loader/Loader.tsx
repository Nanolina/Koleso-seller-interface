import { Vortex } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        colors={[
          'var(--main)',
          'var(--gray)',
          'var(--dark-gray)',
          'var(--main)',
          'var(--light-gray)',
          'var(--gray)',
        ]}
      />
    </div>
  );
};
