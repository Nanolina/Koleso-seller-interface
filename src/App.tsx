import { useEffect, useMemo, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Loader } from './components/Loader/Loader';
import i18n from './i18n/i18n';
import { AddDocumentsPage } from './pages/AddDocumentsPage/AddDocumentsPage';
import { EmailConfirmationPage } from './pages/EmailConfirmationPage/EmailConfirmationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { RequestPasswordRecoveryPage } from './pages/RequestPasswordRecoveryPage/RequestPasswordRecoveryPage';
import { SetNewPasswordPage } from './pages/SetNewPasswordPage/SetNewPasswordPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { StorePage } from './pages/StorePage/StorePage';
import { StoresPage } from './pages/StoresPage/StoresPage';
import { SettingsEmailFormPage } from './pages/settings/SettingsEmailFormPage/SettingsEmailFormPage';
import { SettingsLanguagePage } from './pages/settings/SettingsLanguagePage/SettingsLanguagePage';
import { SettingsPage } from './pages/settings/SettingsPage/SettingsPage';
import { SettingsPasswordPage } from './pages/settings/SettingsPasswordPage/SettingsPasswordPage';
import { SettingsPhoneFormPage } from './pages/settings/SettingsPhoneFormPage/SettingsPhoneFormPage';
import { IRootState } from './redux/rootReducer';
import { AppDispatch } from './redux/store';
import { handleCheckAuth, handleGetUserById } from './redux/thunks/user';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isInitialized, setIsInitialized] = useState(false);

  const { id, isVerifiedEmail, isActive, isSeller, language } = useSelector(
    (state: IRootState) => state.user
  );

  const token = useMemo(() => localStorage.getItem('token'), []);

  useEffect(() => {
    if (token) {
      dispatch(handleCheckAuth()).then(() => setIsInitialized(true));
    } else {
      setIsInitialized(true);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token && id) {
      dispatch(handleGetUserById());
    }
  }, [dispatch, id, token]);

  useEffect(() => {
    i18n.changeLanguage(language.toString());
  }, [language]);

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div className="app">
          <Routes>
            {isSeller ? (
              <>
                {!isVerifiedEmail && (
                  <>
                    <Route
                      path="/email-confirmation"
                      element={<EmailConfirmationPage />}
                    />
                    <Route
                      path="*"
                      element={<Navigate to="/email-confirmation" replace />}
                    />
                  </>
                )}
                {isVerifiedEmail && isActive && (
                  <>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route
                      path="/product/:productId/:tab"
                      element={<ProductPage />}
                    />
                    <Route path="/stores" element={<StoresPage />} />
                    <Route path="/store/:storeId" element={<StorePage />} />
                    <Route
                      path="/add-documents"
                      element={<AddDocumentsPage />}
                    />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/order/:orderNumber" element={<OrderPage />} />
                    <Route
                      path="/notifications"
                      element={<NotificationsPage />}
                    />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route
                      path="/settings/language"
                      element={<SettingsLanguagePage />}
                    />
                    <Route
                      path="/settings/phone"
                      element={<SettingsPhoneFormPage />}
                    />
                    <Route
                      path="/settings/email"
                      element={<SettingsEmailFormPage />}
                    />
                    <Route
                      path="/settings/password"
                      element={<SettingsPasswordPage />}
                    />
                    <Route
                      path="*"
                      element={<Navigate to="/products" replace />}
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                  path="/password/recovery"
                  element={<RequestPasswordRecoveryPage />}
                />
                <Route
                  path="/password/set/:userId"
                  element={<SetNewPasswordPage />}
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default App;
