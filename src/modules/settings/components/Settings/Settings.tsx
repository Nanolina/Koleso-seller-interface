import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NEW } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleGetOrganizationById } from '../../../../redux/thunks/organization';
import { SignOutModal } from '../../../modal';
import { Setting } from '../Setting/Setting';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { id: userId, organizationId } = useSelector(
    (state: IRootState) => state.user
  );
  const { name: organizationName, founderId } = useSelector(
    (state: IRootState) => state.organization.organization
  );

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (organizationId && organizationId !== NEW) {
      dispatch(handleGetOrganizationById(organizationId));
    }
  }, [dispatch, organizationId]);

  return (
    <div className={styles.container}>
      <Setting title={t('settings.phone')} redirectPage="phone" />
      <Setting title={t('settings.email')} redirectPage="email" />
      <Setting title={t('settings.language')} redirectPage="language" />
      <Setting
        title={t('settings.password.changePassword')}
        redirectPage="password"
      />
      <Setting
        title={
          organizationName
            ? `${t('settings.organization.label')}: ${organizationName}`
            : t('settings.organization.create')
        }
        redirectPage={`organization/${organizationId || NEW}`}
        isNoRedirect={founderId !== userId && founderId !== ''}
      />

      <span className="removeText" onClick={() => setModalOpen(true)}>
        {t('settings.signOutOfAccount')}
      </span>

      <SignOutModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
