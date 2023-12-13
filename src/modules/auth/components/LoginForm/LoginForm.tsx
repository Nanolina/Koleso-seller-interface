import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Button } from '../../../../ui/Button/Button';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="authContainer">
      <InputLabel
        label={t('auth.emailUsernamePhone')}
        id="login"
        name="login"
        inputType="email"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        required
      />
      <InputLabel
        label={t('auth.password')}
        id="password"
        name="password"
        inputType="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <div className={styles.logInButtonsContainer}>
        <span>{`${t('auth.forgotPassword')}?`}</span>
        <Button text={t('auth.logIn')} onClick={() => {}} />
      </div>
      <div className={styles.signUpButtonsContainer}>
        <span className={styles.notAccount}>{t('auth.notAccount')}</span>
        <Button text={t('auth.signUp')} onClick={() => navigate('/signup')} />
      </div>
    </div>
  );
};
