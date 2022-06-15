import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';
import LayoutInfoProfile from './layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './layouts/LayoutInfoProductAdd[Seller]';
import LayoutDashboardProductSeller from './layouts/LayoutDashboardProduct[Seller]';
import LayoutDashboardProductBuyer from './layouts/LayoutDashboardProduct[Buyer]';
import NotifikasiHargaTawar from './components/NotifikasiHargaTawar[Buyer]';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/info-profile'} element={<LayoutInfoProfile />} />
      <Route path={'/info-product-add'} element={<LayoutInfoProductAdd />} />
      <Route path={'/dashboard-product-seller'} element={<LayoutDashboardProductSeller />} />
      <Route path={'/dashboard-product-buyer'} element={<LayoutDashboardProductBuyer />} />
      <Route path={'/notifikasi-harga-tawar'} element={<NotifikasiHargaTawar />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;