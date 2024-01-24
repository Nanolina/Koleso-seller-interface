import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleRequestPasswordRecovery } from '../../../../../redux/thunks/user';
import { IChangeEmailData } from '../../../../../services/types/request';
import { Button } from '../../../../../ui/Button/Button';

export const RequestPasswordRecoveryForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  // Initial values
  const initialValues = {
    email: '',
  };

  const handleSubmit = async (values: IChangeEmailData) => {
    const userData: IChangeEmailData = {
      email: values.email,
    };

    dispatch(handleRequestPasswordRecovery(userData));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className="authContainer">
          <InputLabel
            name="email"
            inputType="email"
            label={t('auth.email')}
            id="email"
            errors={errors}
            touched={touched}
            required
          />

          <div>
            <Button text={t('send')} type="submit" />
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
