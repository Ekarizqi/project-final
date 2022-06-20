import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./layouts/Register";
import Login from "./layouts/Login";
import LayoutInfoProfile from "./layouts/LayoutInfoProfile";
import LayoutInfoProductAdd from "./layouts/LayoutInfoProductAdd[Seller]";
import LayoutDashboardProductSeller from "./layouts/LayoutDashboardProduct[Seller]";
import LayoutDashboardProductBuyer from "./layouts/LayoutDashboardProduct[Buyer]";
import NotifikasiHargaTawar from "./components/NotifikasiHargaTawar[Buyer]";
import LayoutDashboardProductNotifTawarBuyer from "./layouts/LayoutDashboardProductNotifTawar[Buyer]";
import NotifikasiTawarBerhasil from "./components/NotifikasiTawarBerhasil[Buyer]";
import LayoutInfoProductTawar from "./layouts/LayoutInfoProductTawar[Seller]";
import LayoutInfoProductHubungi from "./layouts/LayoutInfoProductHubungi[Seller]";
import LayoutDashboardJualSeller from "./layouts/LayoutDashboardJual[Seller]";
import LayoutDashboardJualProductSeller from "./layouts/LayoutDashboardJualProduct[Seller]";
import LayoutDashboardJualDiminatiSeller from "./layouts/LayoutDashboardJualDiminati[Seller]";
import NotifikasiHargaTawarSeller from "./components/NotifikasiHargaTawar[Seller]";
import NotifikasiStatusPenjualan from "./components/NotifikasiStatusPenjualan[Seller]";
import NotifikasiSeller from "./components/NotifikasiSeller";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/info-profile"} element={<LayoutInfoProfile />} />
        <Route path={"/info-product-add"} element={<LayoutInfoProductAdd />} />
        <Route
          path={"/dashboard-product-seller"}
          element={<LayoutDashboardProductSeller />}
        />
        <Route
          path={"/dashboard-jual-seller"}
          element={<LayoutDashboardJualSeller />}
        />
        <Route
          path={"/dashboard-jual-product-seller"}
          element={<LayoutDashboardJualProductSeller />}
        />
        <Route
          path={"/dashboard-jual-diminati-seller"}
          element={<LayoutDashboardJualDiminatiSeller />}
        />
        <Route
          path={"/dashboard-product-buyer"}
          element={<LayoutDashboardProductBuyer />}
        />
        <Route
          path={"/dashboard-product-notif-tawar-buyer"}
          element={<LayoutDashboardProductNotifTawarBuyer />}
        />
        <Route
          path={"/notifikasi-harga-tawar"}
          element={<NotifikasiHargaTawar />}
        />
        <Route
          path={"/notifikasi-tawar-berhasil"}
          element={<NotifikasiTawarBerhasil />}
        />
        <Route
          path={"/notifikasi-seller"}
          element={<NotifikasiSeller />}
        />
        <Route
          path={"/notifikasi-tawar-match"}
          element={<NotifikasiHargaTawarSeller />}
        />
        <Route
          path={"/notifikasi-status-penjualan"}
          element={<NotifikasiStatusPenjualan />}
        />
        <Route
          path={"/info-product-tawar"}
          element={<LayoutInfoProductTawar />}
        />
        <Route
          path={"/info-product-hubungi"}
          element={<LayoutInfoProductHubungi />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
