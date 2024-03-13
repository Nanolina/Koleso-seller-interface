import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../components/Loader/Loader';
import { MessageBox } from '../../../components/MessageBox/MessageBox';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { IRootState } from '../../../redux/rootReducer';
import { AppDispatch } from '../../../redux/store';
import { handleChangeEmail } from '../../../redux/thunks/user';
import { Button } from '../../../ui/Button/Button';
import { Container } from '../../../ui/Container/Container';
import { Email } from '../../../ui/Email/Email';
import { Title } from '../../../ui/Title/Title';
import { formatErrors } from '../../../utils';
import { validationSchema } from './validationSchema';

export const SettingsEmailFormPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleCloseSideMenu } = useSideMenu();

  const { email, loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  if (loading) return <Loader />;

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/settings')}
        isSmallContainer
      >
        <Title text={t('settings.email')} />
        <Formik
          initialValues={{ email }}
          validationSchema={() => validationSchema(t)}
          onSubmit={(values) => dispatch(handleChangeEmail(values.email))}
          enableReinitialize
        >
          {({ values, errors, touched, dirty, setFieldValue, isValid }) => (
            <Form className="formFieldsContainer">
              <Email
                value={values.email}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />

              <div className="buttonSaveItemContainer">
                <Button
                  text={t('save')}
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
      </Container>
    </>
  );
};
