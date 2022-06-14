import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';
import LayoutInfoProfile from './layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './layouts/LayoutInfoProductAdd';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/info-profile'} element={<LayoutInfoProfile />} />
      <Route path={'/info-product-add'} element={<LayoutInfoProductAdd />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;