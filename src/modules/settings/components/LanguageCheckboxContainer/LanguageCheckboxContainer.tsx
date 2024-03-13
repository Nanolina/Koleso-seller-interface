import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxWithLabel } from '../../../../components/CheckboxWithLabel/CheckboxWithLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { ICheckboxOption } from '../../../../components/types';
import i18n from '../../../../i18n/i18n';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleChangeLanguage } from '../../../../redux/thunks/user';
import { createLanguageOptions } from '../../functions';

export const LanguageCheckboxContainer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const options = useMemo(() => createLanguageOptions(t), [t]);

  if (loading) return <Loader />;

  return (
    <div className="formFieldsContainer">
      {options.map((option: ICheckboxOption) => (
        <CheckboxWithLabel
          key={option.name}
          label={option.label}
          checked={i18n.language === option.name}
          onChange={() => dispatch(handleChangeLanguage(option.name))}
          name={option.name}
        />
      ))}

      {error && <MessageBox errorMessage={error} />}
      {success && <MessageBox successMessage={success} />}
    </div>
  );
};
