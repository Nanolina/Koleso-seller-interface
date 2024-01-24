import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IResendEmailButtonProps } from '../../..';
import { IRootState } from '../../../../../redux/rootReducer';
import { Button } from '../../../../../ui/Button/Button';
import { TimerText } from '../../../ui/Timer/Timer';

export const ResendEmailButton: React.FC<IResendEmailButtonProps> = React.memo(
  ({ isButtonDisabled, timer, onClick }) => {
    const { t } = useTranslation();
    const email = useSelector((state: IRootState) => state.user.email);

    return (
      <>
        <Button
          text={`${t('auth.changeEmail.buttons.resendEmail')}: ${email}`}
          onClick={onClick}
          type="submit"
          backgroundColor="var(--light-gray)"
          textColor="black"
          isBold={false}
          hasShadow={true}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled && <TimerText timer={timer} />}
        </Button>
      </>
    );
  }
);
