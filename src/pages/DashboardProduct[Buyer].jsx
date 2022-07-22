import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Modal } from "react-bootstrap";
import NotifikasiHargaTawar from "../components/NotifikasiHargaTawar[Buyer]";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import axios from "axios";
//import { useDispatch } from "react-redux/es/exports";

export default function DashboardProductBuyer() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const params = useParams();
  console.log("ini params:", params);
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(false);
  //const dispatch = useDispatch ();

  const fetchData = async () => {
    setLoading(true);
    const response = await axios
    .get(`https://staging-fasthand-api.herokuapp.com/api/produk/${params.idProduk}`)
    .catch((err) => {
      console.log("err",err);
    });
    setProduk(response.data.data);
    //console.log(produk,"data");
    setLoading(false);
  };

  useEffect(() => {

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(produk.kota?.idKota,"kota")
  // const images = produk.gambarProdukList
  // console.log(images,"image")
  return (
    <div className="custom-overflow-x-hidden">
      {loading === true ? (
        <>loading</>
      ) : (
        <>
        
      {isMobile
        ?
        <div className="container mt-5 pt-4">
          <div className="w-75 mx-auto">
            <div className="row">
              <div className="col-md-8">
                <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                  <div>
                    
                    <img 
                      src={`${produk.gambarProdukList?.[0]}`}
                      alt="jam"
                      className="w-100"
                    />
                
                  </div>

                  <div>
                    <img 
                      src={`${produk.gambarProdukList?.[1]}`}
                      alt="jam"
                      className="w-100"
                    />
                  </div>

                  <div>
                    <img
                      src={`${produk.gambarProdukList?.[1]}`}
                      alt="jam"
                      className="w-100"
                    />
                  </div>
                </Carousel>
              </div>

              <div className="col-md-4">
                <div className="border px-3 py-3 custom-border-auth">
                  <p className="text-dark font-weight-bold">{produk.namaProduk}</p>
                  <p className="text-muted custom-font-1 custom-space-top">
                    Aksesoris
                  </p>
                  <p className="text-dark custom-space-top">Rp {produk.hargaProduk}</p>

                  <button
                    onClick={handleShow}
                    className={
                      isMobile
                        ? "mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
                        : "mx-auto mt-3 form-group font-weight-bold text-white border-0 py-2 w-75 fixed-bottom custom-border-auth custom-button-auth custom-font-1"
                    }
                  >
                    Saya tertarik dan ingin nego
                  </button>
                  <Modal
                    size="sm"
                    show={show}
                    onHide={handleClose}
                    contentClassName="custom-border-auth"
                    centered
                  >
                    <NotifikasiHargaTawar onHide={handleClose} />
                  </Modal>
                </div>

                <div className="border mt-3 px-2 py-2 custom-border-auth">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={`${produk.gambarPenjual}`} alt="seller" />
                    </div>

                    <div className="col-md-9">
                      <p className="text-dark font-weight-bold custom-font-1">
                        {produk.namaPenjual}
                      </p>
                      <p className="text-muted custom-font-5 custom-space-top">
                        {produk.kota?.namaKota}
                      </p>
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
                    {produk.deskripsiProduk}                    <br /> <br />
                    {produk.deskripsiProduk}                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="w-100 mx-auto">
          <FontAwesomeIcon icon={faArrowLeft} className="fixed-top rounded-circle bg-white p-1 ml-4 mt-5 custom-font-3" />
          <div className="row">
            <div className="col-md-8">
              <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                  <img
                    src={require("../images/jam-kotak.png")}
                    alt="jam"
                    className="w-100"
                  />
                </div>

                <div>
                  <img
                    src={require("../images/jam-kotak.png")}
                    alt="jam"
                    className="w-100"
                  />
                </div>

                <div>
                  <img
                    src={require("../images/jam-kotak.png")}
                    alt="jam"
                    className="w-100"
                  />
                </div>
              </Carousel>
            </div>

            <div className="col-md-4 px-5">
              <div className="container-fluid custom-top-minus">
                <div className="border px-3 py-3 custom-border-auth bg-white">
                  <p className="text-dark font-weight-bold">{produk.namaProduk}</p>
                  <p className="text-muted custom-font-1 custom-space-top">
                    Aksesoris
                  </p>
                  <p className="text-dark custom-space-top">Rp {produk.hargaProduk}</p>

                  <button
                    onClick={handleShow}
                    className={
                      isMobile
                        ? "mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1"
                        : "mx-auto mt-3 form-group font-weight-bold text-white border-0 py-2 w-75 fixed-bottom custom-border-auth custom-button-auth custom-font-1"
                    }
                  >
                    Saya tertarik dan ingin nego
                  </button>
                  <Modal
                    size="sm"
                    show={show}
                    onHide={handleClose}
                    contentClassName="custom-border-auth"
                    centered
                  >
                    <NotifikasiHargaTawar onHide={handleClose} />
                  </Modal>
                </div>

                <div className="border mt-3 px-2 py-2 custom-border-auth">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={`${produk.gambarPenjual}`} alt="seller" />
                    </div>

                    <div className="col-md-9">
                      <p className="text-dark font-weight-bold custom-font-1">
                      {produk.namaPenjual}
                      </p>
                      <p className="text-muted custom-font-5 custom-space-top">
                        Kota
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid px-5">
            <div className="row">
              <div className="col-md-8 mt-4 mb-4">
                <div className="py-3 px-3 border custom-border-auth">
                  <p className="text-dark font-weight-bold custom-font-1">
                    Deskripsi
                  </p>

                  <p className="text-muted custom-font-1">
                    {produk.deskripsiProduk}                    <br /> <br />
                    {produk.deskripsiProduk}                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      </>
      )}
    </div>
  );
}
