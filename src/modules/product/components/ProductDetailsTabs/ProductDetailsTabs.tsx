import { useTranslation } from 'react-i18next';
import { BsBox, BsImages } from 'react-icons/bs';
import { IoColorFilterSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW } from '../../../../consts';
import { Tab } from '../../../../ui/Tab/Tab';
import { ImageUploadForm } from '../../imageForm/components/ImageUploadForm/ImageUploadForm';
import { ProductDetailsForm } from '../../productForm';
import { VariantDetailsForm } from '../../variantForm';
import styles from './ProductDetailsTabs.module.css';

export const ProductDetailsTabs: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productId, tab } = useParams<{ productId: string; tab: string }>();
  const isProductExist = productId !== NEW;
  const activeTab = tab || 'product';

  const changeTab = (newTab: string) => {
    navigate(`/product/${productId}/${newTab}`);
  };

  return (
    <>
      <div className={styles.container}>
        <Tab
          activeTab={activeTab}
          setActiveTab={() => changeTab('product')}
          tabName="product"
          text={t('products.tabs.product')}
          icon={<BsBox />}
        />

        {isProductExist && (
          <Tab
            activeTab={activeTab}
            setActiveTab={() => changeTab('variant')}
            tabName="variant"
            text={t('products.form.variants.label')}
            icon={<IoColorFilterSharp />}
          />
        )}

        {isProductExist && (
          <Tab
            activeTab={activeTab}
            setActiveTab={() => changeTab('image')}
            tabName="image"
            text={t('products.form.image.label')}
            icon={<BsImages />}
          />
        )}
      </div>
      {activeTab === 'product' && <ProductDetailsForm />}
      {activeTab === 'variant' && <VariantDetailsForm />}
      {activeTab === 'image' && <ImageUploadForm />}
    </>
  );
};
