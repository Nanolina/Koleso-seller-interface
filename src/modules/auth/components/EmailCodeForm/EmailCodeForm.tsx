import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import VerificationInput from 'react-verification-input';
import { Loader } from '../../../../components/Loader/Loader';
import { IRootState } from '../../../../redux/rootReducer';
import { CodeType } from '../../../../types';
import { Button } from '../../../../ui/Button/Button';
import { useEmailCode } from '../../hooks/useEmailCode';
import { TimerText } from '../../ui/Timer/Timer';
import { CodeImageText } from '../CodeImageText/CodeImageText';
import styles from './EmailCodeForm.module.css';
import { initialValues } from './initialValues';

export const EmailCodeForm: React.FC<{
  codeType: CodeType;
}> = ({ codeType }) => {
  const { t } = useTranslation();

  const { loading, email } = useSelector((state: IRootState) => state.user);

  const { timer, isButtonResendDisabled, resendCode, onSubmitCode } =
    useEmailCode(codeType);

  if (loading) return <Loader />;

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmitCode}>
        {({ values, setFieldValue, handleSubmit }) => (
          <Form className="authContainer">
            <CodeImageText />
            <VerificationInput
              validChars="0-9"
              inputProps={{ inputMode: 'numeric' }}
              placeholder=""
              autoFocus
              length={6}
              value={values.code.join('')}
              onChange={(code) => {
                setFieldValue('code', code.split(''));
                if (code.length === 6) {
                  handleSubmit();
                }
              }}
              classNames={{
                container: styles.inputContainer,
                character: styles.character,
                characterSelected: styles.characterSelected,
              }}
            />
            {timer > 0 ? (
              <TimerText timer={timer} />
            ) : (
              <Button
                onClick={resendCode}
                text={t('auth.code.email.resend', { email })}
                disabled={isButtonResendDisabled}
                isLink
              />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
