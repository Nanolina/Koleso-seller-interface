import React from 'react';
import { InputUpload } from '../../ui/InputUpload/InputUpload';
import { Label } from '../../ui/Label/Label';
import { IInputUploadLabelProps } from '../types';

export const InputUploadLabel: React.FC<IInputUploadLabelProps> = React.memo(
  ({ label, id, name, required, onChange, acceptFiles, multiple }) => {
    return (
      <div className="elementWithLabelContainer">
        <Label id={id} text={label} required={required} />
        <InputUpload
          id={id}
          name={name}
          required={required}
          onChange={onChange}
          acceptFiles={acceptFiles}
          multiple={multiple}
        />
      </div>
    );
  }
);
