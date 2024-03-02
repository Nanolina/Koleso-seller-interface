import React from 'react';
import { MdRestorePage } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { IRecoverIconProps } from '../types';

export const RecoverIcon: React.FC<IRecoverIconProps> = React.memo(
  ({ tooltipText, onClick }) => {
    return (
      <div>
        <Tooltip id="tooltip" />
        <MdRestorePage
          size={30}
          color="var(--main)"
          onClick={onClick}
          data-tooltip-id="tooltip"
          data-tooltip-html={tooltipText}
        />
      </div>
    );
  }
);
