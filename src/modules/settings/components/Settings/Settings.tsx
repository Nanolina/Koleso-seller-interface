import { useEffect, useMemo, useState } from 'react';
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

  const notFounderOrganization = useMemo(
    () => founderId !== userId && founderId !== '',
    [founderId, userId]
  );
  const titleOrganization = useMemo(
    () =>
      organizationName
        ? `${t('settings.organization.label')}: ${organizationName}`
        : t('settings.organization.create'),
    [organizationName, t]
  );
  const settingsList = useMemo(
    () => [
      { titleKey: 'settings.phone', redirectPage: 'phone' },
      { titleKey: 'settings.email', redirectPage: 'email' },
      { titleKey: 'settings.language', redirectPage: 'language' },
      {
        titleKey: 'settings.password.changePassword',
        redirectPage: 'password',
      },
      {
        titleKey: '',
        redirectPage: `organization/${organizationId || NEW}`,
        isNoRedirect: notFounderOrganization,
        extra: notFounderOrganization
          ? t('settings.organization.notFounder')
          : '',
        customTitle: titleOrganization,
      },
    ],
    [t, organizationId, notFounderOrganization, titleOrganization]
  );

  useEffect(() => {
    if (organizationId && organizationId !== NEW) {
      dispatch(handleGetOrganizationById(organizationId));
    }
  }, [dispatch, organizationId]);

  return (
    <div className={styles.container}>
      {settingsList.map((setting) => (
        <Setting
          key={setting.titleKey || 'organization'}
          title={setting.customTitle || t(setting.titleKey)}
          redirectPage={setting.redirectPage}
          isNoRedirect={setting.isNoRedirect}
          extra={setting.extra}
        />
      ))}

      <span className="removeText" onClick={() => setModalOpen(true)}>
        {t('settings.signOutOfAccount')}
      </span>

      <SignOutModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
