import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { Button } from '../../../../../ui/Button/Button';
import { useEmailForm } from '../../hooks/useEmailForm';
import { ResendEmailButton } from '../../ui/ResendEmailButton/ResendEmailButton';
import { ChangeEmailForm } from '../ChangeEmailForm/ChangeEmailForm';
import { Text } from '../Text/Text';

export const EmailConfirmation: React.FC = () => {
  const { t } = useTranslation();

  const [changeEmailOpen, setChangeEmailOpen] = useState<boolean>(false);

  const {
    isButtonDisabled,
    timer,
    setTimer,
    initialValues,
    validationSchema,
    handleSubmitChangeEmail,
    handleSubmitResendEmailConfirmation,
  } = useEmailForm();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  useEffect(() => {
    let interval: number | undefined;

    if (isButtonDisabled) {
      interval = window.setInterval(() => {
        setTimer((oldTimer) => {
          if (oldTimer > 0) return oldTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isButtonDisabled, setTimer]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="authContainer">
      <Text />
      <Button
        text={t('auth.changeEmail.buttons.changeEmail')}
        onClick={() => setChangeEmailOpen(!changeEmailOpen)}
        backgroundColor="var(--light-gray)"
        textColor="black"
        isBold={false}
        hasShadow={true}
      />
      {changeEmailOpen && (
        <ChangeEmailForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitChangeEmail}
        />
      )}
      <ResendEmailButton
        onClick={handleSubmitResendEmailConfirmation}
        isButtonDisabled={isButtonDisabled}
        timer={timer}
      />

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
    </div>
  );
};
