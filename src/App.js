import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;