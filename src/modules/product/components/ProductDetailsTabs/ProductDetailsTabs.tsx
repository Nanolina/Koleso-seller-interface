import { useTranslation } from 'react-i18next';
import { BsBox, BsImages } from 'react-icons/bs';
import { IoColorFilterSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW } from '../../../../consts';
import { Tab } from '../../../../ui/Tab/Tab';
import { ImageUploadForm } from '../../imageForm';
import { ProductDetailsForm } from '../../productForm';
import { VariantDetailsForm } from '../../variantForm';
import styles from './ProductDetailsTabs.module.css';

export const ProductDetailsTabs: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { productId, tab } = useParams<{ productId: string; tab: string }>();
  const isProductExist = productId !== NEW;
  const activeTab = tab || 'product';

  const tabs = [
    {
      name: 'product',
      label: t('products.product.label'),
      icon: <BsBox />,
      condition: true,
    },
    {
      name: 'variant',
      label: t('products.variants.label'),
      icon: <IoColorFilterSharp />,
      condition: isProductExist,
    },
    {
      name: 'image',
      label: t('products.image.label'),
      icon: <BsImages />,
      condition: isProductExist,
    },
  ];

  const changeTab = (newTab: string) => {
    navigate(`/product/${productId}/${newTab}`);
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'product':
        return <ProductDetailsForm />;
      case 'variant':
        return <VariantDetailsForm />;
      case 'image':
        return <ImageUploadForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.container}>
        {tabs.map(
          (tab) =>
            tab.condition && (
              <Tab
                key={tab.name}
                activeTab={activeTab}
                setActiveTab={() => changeTab(tab.name)}
                tabName={tab.name}
                text={tab.label}
                icon={tab.icon}
              />
            )
        )}
      </div>
      {renderForm()}
    </>
  );
};
