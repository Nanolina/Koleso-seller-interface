import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Button } from '../../../../ui/Button/Button';

export const ChangePassword: React.FC = () => {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  return (
    <>
      <InputLabel
        label={t('settings.password.currentPassword')}
        id="currentPassword"
        name="currentPassword"
        value={currentPassword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentPassword(event.target.value)
        }
        required
      />
      <InputLabel
        label={t('settings.password.newPassword')}
        id="newPassword"
        name="newPassword"
        value={newPassword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewPassword(event.target.value)
        }
        required
      />
      <InputLabel
        label={t('settings.password.repeatPassword')}
        id="repeatedPassword"
        name="repeatedPassword"
        value={repeatedPassword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setRepeatedPassword(event.target.value)
        }
        required
      />

      <Button text={t('settings.password.changePassword')} onClick={() => {}} />
    </>
  );
};
