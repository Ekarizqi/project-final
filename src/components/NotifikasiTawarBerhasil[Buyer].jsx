import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NotifikasiTawarBerhasil() {
  return (
    <div className="mx-auto my-5 py-3 px-3 border custom-border-auth custom-space-harga-tawar-2">
      <div className="row">
        <div className="col-md-2">
          <img src={require("../images/jam_kecil.png")} alt="Jam" />
        </div>

        <div className="col-md-10 pl-5">
          <p className="text-muted custom-font-5">
            Penawaran produk &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="text-muted custom-font-5">
              20 Apr, 14:04{" "}
              <FontAwesomeIcon icon={faCircle} className="custom-bg-notif-2" />
            </span>
          </p>
          <p className="text-dark custom-font-1">Jam Tangan Casio</p>
          <p className="text-dark custom-font-1">
            <s>Rp 250.000</s>
          </p>
          <p className="text-dark custom-font-1">Berhasil Ditawar Rp 200.000</p>
          <p className="text-muted custom-font-5">
            Kamu akan segera dihubungi penjual via whatsapp
          </p>
        </div>
      </div>

      <hr className="w-100" />

      <div className="row">
        <div className="col-md-2">
          <img src={require("../images/jam_kecil.png")} alt="Jam" />
        </div>

        <div className="col-md-10 pl-5">
          <p className="text-muted custom-font-5">
            Penawaran produk &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="text-muted custom-font-5">
              20 Apr, 14:04{" "}
              <FontAwesomeIcon icon={faCircle} className="custom-bg-notif-2" />
            </span>
          </p>
          <p className="text-dark custom-font-1">Jam Tangan Casio</p>
          <p className="text-dark custom-font-1">Rp 250.000</p>
          <p className="text-dark custom-font-1">Ditawar Rp 200.000</p>
        </div>
      </div>
    </div>
  );
}
