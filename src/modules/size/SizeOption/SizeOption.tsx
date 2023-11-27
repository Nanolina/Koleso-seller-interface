import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { AddColor } from '../../colors';
import { IFinishedSizeOptionProps } from '../types';
import styles from './SizeOption.module.css';

export const SizeOption: React.FC<IFinishedSizeOptionProps> = React.memo(
  ({
    selectedSizeOptions,
    setSelectedSizeOptions,
    sizeOption,
    handleRemoveSizeOption,
  }) => {
    return (
      <div className={styles.container}>
        <div className={styles.sizeContainer}>{sizeOption.size}</div>
        <AddColor
          sizeOption={sizeOption}
          selectedSizeOptions={selectedSizeOptions}
          setSelectedSizeOptions={setSelectedSizeOptions}
        />
        <IoMdClose
          size={18}
          color="var(--dark-gray)"
          className={styles.iconClose}
          onClick={() => handleRemoveSizeOption(sizeOption.size)}
        />
      </div>
    );
  }
);
