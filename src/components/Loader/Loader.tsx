import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
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
  );
};
