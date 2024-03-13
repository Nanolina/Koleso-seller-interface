import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleChangePassword } from '../../../../redux/thunks/user';
import { Button } from '../../../../ui/Button/Button';
import { formatErrors } from '../../../../utils';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

export const ChangePasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  if (loading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => validationSchema(t)}
      onSubmit={(values) => dispatch(handleChangePassword(values))}
    >
      {({ values, errors, touched, dirty, setFieldValue, isValid }) => (
        <Form className="formFieldsContainer">
          <InputLabel
            label={t('settings.password.currentPassword')}
            id="currentPassword"
            name="currentPassword"
            inputType="password"
            value={values.currentPassword}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />
          <InputLabel
            label={t('settings.password.newPassword')}
            id="newPassword"
            name="newPassword"
            inputType="password"
            value={values.newPassword}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />
          <InputLabel
            label={t('settings.password.repeatPassword')}
            id="repeatedPassword"
            name="repeatedPassword"
            inputType="password"
            value={values.repeatedPassword}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
          />

          <div className="buttonSaveItemContainer">
            <Button
              text={t('settings.password.changePassword')}
              type="submit"
              disabled={!isValid || !dirty}
              tooltipText={formatErrors(errors)}
            />
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
