import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Button } from '../../../../../ui/Button/Button';
import { formatErrors } from '../../../../../utils';
import { IChangeEmailFormProps } from '../../../types';

export const ChangeEmailForm: React.FC<IChangeEmailFormProps> = React.memo(
  ({ initialValues, validationSchema, onSubmit }) => {
    const { t } = useTranslation();

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors, touched, isValid }) => (
          <>
            {console.log('errors', errors)}
            <Form className="authContainer">
              <InputLabel
                name="email"
                inputType="email"
                label={t('auth.email')}
                id="email"
                value={values.email}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                required
              />
              <Button
                text={t('auth.changeEmail.label')}
                type="submit"
                disabled={!isValid}
                tooltipText={formatErrors(errors)}
              />
            </Form>
          </>
        )}
      </Formik>
    );
  }
);
