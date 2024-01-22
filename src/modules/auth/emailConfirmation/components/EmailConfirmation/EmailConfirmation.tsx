import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { Button } from '../../../../../ui/Button/Button';
import { useEmailForm } from '../../hooks/useEmailForm';
import { ResendEmailButton } from '../../ui/ResendEmailButton/ResendEmailButton';
import { ChangeEmailForm } from '../ChangeEmailForm/ChangeEmailForm';
import { Text } from '../Text/Text';
import { useTranslation } from 'react-i18next';

export const EmailConfirmation: React.FC = () => {
  const { t } = useTranslation();

  const [changeEmailOpen, setChangeEmailOpen] = useState<boolean>(false);

  const {
    initialValues,
    validationSchema,
    handleSubmitChangeEmail,
    handleSubmitResendEmailConfirmation,
  } = useEmailForm();

  const { loading, error } = useSelector((state: IRootState) => state.user);

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
      <ResendEmailButton onClick={handleSubmitResendEmailConfirmation} />
      {error && <MessageBox errorMessage={error} />}
    </div>
  );
};
