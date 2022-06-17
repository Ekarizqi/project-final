import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export default function NotifikasiStatusPenjualan(){
    return(
        <div className="mx-auto my-5 p-4 border custom-border-auth custom-space-harga-tawar">
            <div className="text-right custom-font-6">
                <FontAwesomeIcon icon={faXmarkCircle} />
            </div>
            
            <p className="text-dark font-weight-bold custom-font-1">
                Perbarui status penjualan produkmu
            </p>
            
            <div>
                <div>
                    <input 
                        type="radio" 
                        className=" text-dark custom-font-1"
                    />
                    Berhasil terjual
                    <p className="text-muted custom-font-1 mt-1" >
                        Kamu telah sepakat menjual produk ini kepada pembeli
                    </p>
                </div>
                <div>
                    <input 
                        type="radio" 
                        className="text-dark custom-font-1" 
                    />
                    Batalkan transaksi
                    <p className="text-muted custom-font-1">
                        Kamu membatalkan transaksi produk ini dengan pembeli
                    </p>
                </div>
                
                <button className="mt-1 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                     Kirim
                </button>
                
            </div>
        </div>
    )
}