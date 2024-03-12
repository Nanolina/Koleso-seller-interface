import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import { IPhoneProps } from '../../components/types';
import { Label } from '../Label/Label';
import { ValidationError } from '../ValidationError/ValidationError';
import styles from './Phone.module.css';
import { containerStyle, getStyles } from './getStyles';

export const Phone: React.FC<IPhoneProps> = React.memo(
  ({ valuesPhone, errors, setFieldValue }) => {
    const { t } = useTranslation();

    const { inputStyle, dropdownStyle, buttonStyle } = useMemo(
      () => getStyles(errors),
      [errors]
    );

    return (
      <>
        <div className={styles.container}>
          <Label text={`${t('auth.phone')}*`} id="phone" />
          <PhoneInput
            country={'cy'}
            value={valuesPhone}
            onChange={(value) => setFieldValue('phone', value)}
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            dropdownStyle={dropdownStyle}
            buttonStyle={buttonStyle}
          />
        </div>
        {errors && <ValidationError error={errors} />}
      </>
    );
  }
);
