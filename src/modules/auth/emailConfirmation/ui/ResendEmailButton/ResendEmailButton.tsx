import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../redux/rootReducer';
import { IOnClickVoid } from '../../../../../types';
import { Button } from '../../../../../ui/Button/Button';

export const ResendEmailButton: React.FC<IOnClickVoid> = React.memo(
  ({ onClick }) => {
    const { t } = useTranslation();
    const email = useSelector((state: IRootState) => state.user.email);

    return (
      <Button
        text={`${t('auth.changeEmail.buttons.resendEmail')}: ${email}`}
        onClick={onClick}
        type="submit"
        backgroundColor="var(--light-gray)"
        textColor="black"
        isBold={false}
        hasShadow={true}
      />
    );
  }
);
