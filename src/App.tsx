import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import i18n from './i18n/i18n';
import { AddDocumentsPage } from './pages/AddDocumentsPage/AddDocumentsPage';
import { AddProductPage } from './pages/AddProductPage/AddProductPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';

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
          </Routes>
        </div>
      </I18nextProvider>
    </Router>
  );
};

export default App;
