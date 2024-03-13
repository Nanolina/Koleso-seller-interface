import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MessageBox } from '../../../components/MessageBox/MessageBox';
import { SideMenu, useSideMenu } from '../../../modules/menu';
import { IRootState } from '../../../redux/rootReducer';
import { AppDispatch } from '../../../redux/store';
import { handleChangePhone } from '../../../redux/thunks/user';
import { Button } from '../../../ui/Button/Button';
import { Container } from '../../../ui/Container/Container';
import { Phone } from '../../../ui/Phone/Phone';
import { Title } from '../../../ui/Title/Title';
import { formatErrors } from '../../../utils';
import { validationSchema } from './validationSchema';

export const SettingsPhoneFormPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { handleCloseSideMenu } = useSideMenu();

  const { phone, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  return (
    <>
      <SideMenu />
      <Container
        onClick={handleCloseSideMenu}
        redirectToItemsPage={() => navigate('/settings')}
        isSmallContainer
      >
        <Title text={t('settings.phone')} />
        <Formik
          initialValues={{ phone }}
          validationSchema={() => validationSchema(t)}
          onSubmit={(values) => dispatch(handleChangePhone(values.phone))}
          enableReinitialize
        >
          {({ values, errors, dirty, setFieldValue, isValid }) => (
            <Form className="formFieldsContainer">
              <Phone
                valuesPhone={values.phone}
                errors={errors.phone}
                setFieldValue={setFieldValue}
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
