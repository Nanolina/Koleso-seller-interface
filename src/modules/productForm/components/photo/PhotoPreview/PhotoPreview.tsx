import { IoCloseOutline } from "react-icons/io5";
import styles from './PhotoPreview.module.css';
import React from "react";
import { IPhotoPreviewProps } from "../../../types";

export const PhotoPreview: React.FC<IPhotoPreviewProps> = React.memo(
  ({ photo, onRemove }) => {
    return (
      <div className={styles.container}>
        <img src={photo} alt="Uploaded" />
        <IoCloseOutline
          color="var(--dark-gray)"
          onClick={onRemove}
          className={styles.iconRemove}
        />
      </div>
    );
  }
);
