import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from 'react-responsive';

export default function DashboardProductNotifTawarBuyer() {
  const isMobile = useMediaQuery({minWidth: 600})
  return (
    <div className="container mt-5 pt-4">
      <div className="w-75 mx-auto">
        <div className="row">
          <div className="col-md-8">
          <Carousel showArrows={true} showThumbs={false} showStatus={false}>
              <div>
                <img
                  src={require("../images/jam.png")}
                  alt="jam"
                  className="w-100"
                />
              </div>

              <div>
                <img
                  src={require("../images/jam.png")}
                  alt="jam"
                  className="w-100"
                />
              </div>

              <div>
                <img
                  src={require("../images/jam.png")}
                  alt="jam"
                  className="w-100"
                />
              </div>
            </Carousel>
          </div>

          <div className="col-md-4">
            <div className="border px-3 py-3 custom-border-auth">
              <p className="text-dark font-weight-bold">Jam Tangan Casio</p>
              <p className="text-muted custom-font-1 custom-space-top">Aksesoris</p>
              <p className="text-dark custom-space-top">Rp 250.000</p>

              <button className={isMobile ? 'mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth-2 custom-font-1' : 'mx-auto mt-3 form-group font-weight-bold text-white border-0 py-2 w-75 fixed-bottom custom-border-auth custom-button-auth-2 custom-font-1'}>
                Menunggu respon penjual
              </button>
            </div>

            <div className="border mt-3 px-2 py-2 custom-border-auth">
              <div className="row">
                <div className="col-md-3">
                  <img src={require("../images/seller.png")} alt="seller" />
                </div>

                <div className="col-md-9">
                  <p className="text-dark font-weight-bold custom-font-1">Nama Penjual</p>
                  <p className="text-muted custom-font-5 custom-space-top">Kota</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mt-4 mb-4">
            <div className="py-3 px-3 border custom-border-auth">
              <p className="text-dark font-weight-bold custom-font-1">
                Deskripsi
              </p>

              <p className="text-muted custom-font-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
