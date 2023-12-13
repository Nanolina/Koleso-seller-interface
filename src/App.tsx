import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import i18n from './i18n/i18n';
import { AddDocumentsPage } from './pages/AddDocumentsPage/AddDocumentsPage';
import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SettingsEmailPage } from './pages/settings/SettingsEmailPage/SettingsEmailPage';
import { SettingsLanguagePage } from './pages/settings/SettingsLanguagePage/SettingsLanguagePage';
import { SettingsPage } from './pages/settings/SettingsPage/SettingsPage';
import { SettingsPasswordPage } from './pages/settings/SettingsPasswordPage/SettingsPasswordPage';
import { SettingsPhonePage } from './pages/settings/SettingsPhonePage/SettingsPhonePage';
import { SettingsStorePage } from './pages/settings/SettingsStorePage/SettingsStorePage';

const App: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage('Russian');
  }, []);

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div className="app">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
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
            <Route path="/settings/phone" element={<SettingsPhonePage />} />
            <Route path="/settings/email" element={<SettingsEmailPage />} />
            <Route
              path="/settings/password"
              element={<SettingsPasswordPage />}
            />
          </Routes>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default App;
