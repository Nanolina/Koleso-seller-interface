import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoSearchOutline } from 'react-icons/io5';
import styles from './SearchBar.module.css';

export const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <IoSearchOutline className={styles.icon} color="var(--gray)" />
      <input
        type="text"
        placeholder={`${t('search')}...`}
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.input}
      />
    </div>
  );
};
