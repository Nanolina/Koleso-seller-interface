import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Button } from '../../../../ui/Button/Button';
import { Label } from '../../../../ui/Label/Label';
import styles from './SignUpForm.module.css';

export const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [phone, setPhone] = useState<any>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  return (
    <div className="authContainer">
      <div className={styles.phoneContainer}>
        <Label text={t('auth.phone')} id="phone" />
        <PhoneInput
          country={'cy'}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputStyle={{
            backgroundColor: 'var(--light-gray)',
            borderColor: 'var(--light-gray)',
          }}
          dropdownStyle={{
            backgroundColor: 'var(--light-gray)',
            borderColor: 'var(--light-gray)',
          }}
          buttonStyle={{
            borderColor: 'var(--light-gray)',
          }}
        />
      </div>

      <InputLabel
        label={t('auth.email')}
        id="email"
        name="email"
        inputType="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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
      <InputLabel
        label={t('auth.repeatPassword')}
        id="repeatedPassword"
        name="repeatedPassword"
        inputType="password"
        value={repeatedPassword}
        onChange={(event) => setRepeatedPassword(event.target.value)}
        required
      />

      <div className={styles.buttonContainer}>
        <Button text={t('auth.signUp')} onClick={() => navigate('/')} />
      </div>

      <div className={styles.logInButtonsContainer}>
        <span className={styles.haveAccount}>{`${t(
          'auth.haveAccount'
        )}?`}</span>
        <Button text={t('auth.logIn')} onClick={() => navigate('/login')} />
      </div>
    </div>
  );
};
