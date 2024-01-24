import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import i18n from './i18n/i18n';
import { AddDocumentsPage } from './pages/AddDocumentsPage/AddDocumentsPage';
import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { EmailConfirmationPage } from './pages/EmailConfirmationPage/EmailConfirmationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { RequestPasswordRecoveryPage } from './pages/RequestPasswordRecoveryPage/RequestPasswordRecoveryPage';
import { SetNewPasswordPage } from './pages/SetNewPasswordPage/SetNewPasswordPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { SettingsEmailPage } from './pages/settings/SettingsEmailPage/SettingsEmailPage';
import { SettingsLanguagePage } from './pages/settings/SettingsLanguagePage/SettingsLanguagePage';
import { SettingsPage } from './pages/settings/SettingsPage/SettingsPage';
import { SettingsPasswordPage } from './pages/settings/SettingsPasswordPage/SettingsPasswordPage';
import { SettingsPhonePage } from './pages/settings/SettingsPhonePage/SettingsPhonePage';
import { SettingsStorePage } from './pages/settings/SettingsStorePage/SettingsStorePage';
import { IRootState } from './redux/rootReducer';
import { AppDispatch } from './redux/store';
import { handleCheckAuth } from './redux/thunks/user';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, isVerifiedEmail } = useSelector(
    (state: IRootState) => state.user
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(handleCheckAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage('Russian');
  }, []);

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <div className="app">
          <Routes>
            {isAuth && !isVerifiedEmail && (
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

            {!isAuth && !isVerifiedEmail && (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}

            {!isAuth && (
              <>
                <Route
                  path="/password/recovery"
                  element={<RequestPasswordRecoveryPage />}
                />
                <Route
                  path="/password/set/:userId"
                  element={<SetNewPasswordPage />}
                />
              </>
            )}

            {isAuth && isVerifiedEmail && (
              <>
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default App;
