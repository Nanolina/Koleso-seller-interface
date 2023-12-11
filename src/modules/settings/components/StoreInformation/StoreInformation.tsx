import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { InputUploadLabel } from '../../../../components/InputUploadLabel/InputUploadLabel';
import { TextareaLabel } from '../../../../components/TextareaLabel/TextareaLabel';
import { PhotoPreview } from '../../../photo';
import styles from './StoreInformation.module.css';

export const StoreInformation = () => {
  const { t } = useTranslation();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [logo, setLogo] = useState<any>('');
  const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [whatsApp, setWhatsApp] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    if (logo) {
      const newLogoPreviewUrl = URL.createObjectURL(logo);
      setLogoPreviewUrl(newLogoPreviewUrl);

      return () => {
        URL.revokeObjectURL(newLogoPreviewUrl);
      };
    }
  }, [logo]);

  return (
    <div className={styles.container}>
      <InputLabel
        label={t('settings.store.name')}
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextareaLabel
        label={t('settings.store.description')}
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={4}
      />
      <InputLabel
        label={t('settings.store.address')}
        id="address"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <InputUploadLabel
        label={t('settings.store.logo')}
        id="logo"
        name="logo"
        onChange={(event) =>
          setLogo(event.target.files ? event.target.files[0] : null)
        }
        acceptFiles="image/*"
      />

      {logoPreviewUrl && (
        <div className={styles.photo}>
          <PhotoPreview
            photo={logoPreviewUrl}
            onRemove={() => {
              setLogo(null);
              setLogoPreviewUrl(null);
            }}
          />
        </div>
      )}

      <div className={styles.contactsContainer}>
        <InputLabel
          label={t('settings.store.phone')}
          inputType="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <InputLabel
          label="WhatsApp"
          id="whatsApp"
          name="whatsApp"
          value={whatsApp}
          onChange={(event) => setWhatsApp(event.target.value)}
        />
        <InputLabel
          label={t('settings.store.instagram')}
          id="instagram"
          name="instagram"
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />
        <InputLabel
          label={t('settings.store.email')}
          id="email"
          name="email"
          inputType="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
    </div>
  );
};
