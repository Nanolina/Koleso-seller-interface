import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import i18n from './i18n/i18n';
import { AddDocumentsPage } from './pages/AddDocumentsPage/AddDocumentsPage';
import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { SettingsLanguagePage } from './pages/SettingsLanguagePage/SettingsLanguagePage';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';
import { SettingsStorePage } from './pages/SettingsStorePage/SettingsStorePage';

const App: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage('Russian');
  }, []);

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div className="app">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/add-documents" element={<AddDocumentsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/order/:orderNumber" element={<OrderPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route
              path="/settings/language"
              element={<SettingsLanguagePage />}
            />
            <Route path="/settings/store" element={<SettingsStorePage />} />
          </Routes>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default App;
