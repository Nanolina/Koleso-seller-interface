import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsBox, BsImages } from 'react-icons/bs';
import { IoColorFilterSharp } from 'react-icons/io5';
import { Button } from '../../../../ui/Button/Button';
import { Tab } from '../../../../ui/Tab/Tab';
import { ImageUploadForm } from '../../ImageUploadForm/ImageUploadForm';
import { ProductDetailsForm } from '../../productForm';
import { VariantsDetailsForm } from '../../variantsForm';
import styles from './ProductDetailsTabs.module.css';

export const ProductDetailsTabs: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('product');

  return (
    <>
      <div className={styles.tabs}>
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="product"
          text={t('menuItems.Products')}
          icon={<BsBox />}
        />

        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="variants"
          text={t('products.form.variants.label')}
          icon={<IoColorFilterSharp />}
        />

        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabName="images"
          text={t('products.form.image.label')}
          icon={<BsImages />}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          text={t('cancel')}
          backgroundColor="white"
          textColor="var(--dark-main)"
          border={false}
          isBold={false}
          hasShadow
        />
        <Button text={t('save')} isBold={false} hasShadow border />
      </div>
      <div>
        {activeTab === 'product' && <ProductDetailsForm />}
        {activeTab === 'variants' && <VariantsDetailsForm />}
        {activeTab === 'images' && <ImageUploadForm />}
      </div>
    </>
  );
};
