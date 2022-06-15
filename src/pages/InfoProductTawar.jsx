import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profil from "../images/profil.png";
import jam_kecil from "../images/jam_kecil.png";


export default function InfoProductTawar() {
    return(
        <div className="container">
            <div className="w-75 mx-auto">
                <FontAwesomeIcon icon={faArrowLeft} className="custom-font-3" />
                <span>
                    <div className="mx-auto w-50 py-4">
                        <div className="border custom-border-auth mb-4 p-2" >
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={profil} alt="profil"  />
                                </div>
                                <div className="col">
                                    <p className="text-dark font-weight-bold custom-font-1">Nama Pembeli</p>
                                    <p className="text-muted custom-font-5">Kota</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 text-dark font-weight-bold custom-font-1">Daftar Produkmu yang dibeli</div>

                        <div className=" mb-3 p-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={jam_kecil} alt="foto_produk"/>
                                </div>
                                <div className="col">
                                    <div className="row text-muted custom-font-5">
                                        <p className="col" >Penawaran Produk</p>
                                        <p className="col text-right">20 Apr, 14:04</p>
                                    </div>
                                    <div className="text-dark">
                                        <p>Jam Tangan Casio</p>
                                        <p>Rp 250.000</p>
                                        <p>Ditawar Rp 200.000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row-reverse">
                                <button className="mt-2  font-weight-bold text-white border-light py-2 w-25 custom-border-auth custom-button-auth custom-font-1" href="/info-product-hubungi">
                                        Terima
                                </button>

                                <button className="mt-2 font-weight-bold py-2 w-25 custom-border-auth custom-font-1">
                                        Tolak
                                </button>
                            </div>
                            <hr className="w-100"/>
                        </div>
                    
                    </div>
                </span>
            </div>
        </div>
    )
}