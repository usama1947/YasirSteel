import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CompanyPage from './pages/CompanyPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
