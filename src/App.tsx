import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import './App.css';
import i18n from './i18n/i18n';
import { Products } from './modules/products';

const App: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage('Russian');
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="app">
        <Products />
      </div>
    </I18nextProvider>
  );
};

export default App;
