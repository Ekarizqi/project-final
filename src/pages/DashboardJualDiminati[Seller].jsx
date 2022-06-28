import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DashboardJualDiminatiSeller() {
  return (
    <div className="container mt-5 pt-4">
      <div className="w-75 mx-auto">
        <p className="text-dark font-weight-bold custom-font-6">
          Daftar Jual Saya
        </p>

        <div className="border my-3 px-3 pt-3 custom-border-auth">
          <div className="row">
            <div className="col-md-1">
              <img src={require("../images/seller.png")} alt="seller" />
            </div>

            <div className="col-md-9">
              <p className="text-dark font-weight-bold custom-font-1">
                Nama Penjual
              </p>
              <p className="text-muted custom-font-5 custom-space-top">Kota</p>
            </div>

            <div className="col-md-2 text-right">
              <form action="/info-profile">
                <button className="mt-1 form-group font-weight-bold py-2 w-50 custom-border-button custom-border-auth custom-font-2">
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="w-100 border px-4 py-4 custom-border-auth">
              <p className="text-dark font-weight-bold">Kategori</p>

              <div className="d-flex justify-content-between">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        className="text-muted"
                      />
                    </span>
                    <a href="/dashboard-jual-seller" className="text-dark">
                      Semua Produk
                    </a>
                  </div>
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} className="text-muted" />
                </span>
              </div>
              <hr />

              <div className="d-flex justify-content-between custom-font-auth">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <a
                      href="/dashboard-jual-diminati-seller"
                      className="custom-font-auth"
                    >
                      Diminati
                    </a>
                  </div>
                </div>
                <span className="custom-font-auth">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </div>
              <hr className="custom-button-auth" />

              <div className="d-flex justify-content-between">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="mr-2 text-muted">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                    <span className="text-dark">Terjual</span>
                  </div>
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} className="text-muted" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row text-center">
              <div className="col-md-12">
                <img src={require("../images/minati.png")} alt="minati" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
