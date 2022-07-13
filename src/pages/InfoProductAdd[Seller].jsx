import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function InfoProductAddSeller() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  const onChangeName = (element) => {
    const name = element.target.value;
    setName(name);
  };

  const onChangePrice = (element) => {
    const price = element.target.value;
    setPrice(price);
  };

  const onChaneCategory = (element) => {
    const category = element.target.value;
    setCategory(category);
  };

  const onChangeDescription = (element) => {
    const description = element.target.value;
    setDescription(description);
  };

  const onChangeImage = (element) => {
    const image = element.target.value;
    setImage(image);
  };

  const onPostData = async (element) => {
    element.preventDefault();
    const AddProdcuts = { name, price, category, description, image };
    await Axios.post(
      "https://staging-fasthand-api.herokuapp.com/api/produk/add",
      AddProdcuts
    )
      .then((res) => {
        if (res.status === 201) {
          console.log("Data berhasil ditambahkan", res.data);
          navigate.push({
            pathname: "/dashboard-jual-seller",
            state: { status: true },
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 pt-4">
      <div className={isMobile ? "w-75 mx-auto" : "w-100 mx-auto"}>
        <div className="custom-responsive-display">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-font-3 position-absolute"
          />
        </div>
        <span>
          <div className={isMobile ? "w-50 mx-auto" : "w-100 mx-auto px-3"}>
            <Form onSubmit={onPostData}>
              <div className="form-group mb-3">
                <label
                  htmlFor="name"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Nama Produk
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                  id="name"
                  name="name"
                  placeholder="Nama Produk"
                  onChange={onChangeName}
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="price"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Harga Produk
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                  id="price"
                  name="price"
                  placeholder="Rp 0,00"
                  onChange={onChangePrice}
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="category"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Kategori
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-select text-muted w-100 px-4 py-2 border custom-border-auth"
                      aria-label="Default select example"
                    >
                      <option defaultValue={{ value: null }}>
                        Pilih Kategori
                      </option>
                      <option value="Jam Tangan" onChange={onChaneCategory}>
                        Jam Tangan
                      </option>
                      <option value="Elektronik" onChange={onChaneCategory}>
                        Elektronik
                      </option>
                      <option value="Komputer" onChange={onChaneCategory}>
                        Komputer &amp; Aksesoris
                      </option>
                      <option value="Hobi" onChange={onChaneCategory}>
                        Hobi &amp; Koleksi
                      </option>
                      <option value="Perawatan" onChange={onChaneCategory}>
                        Perawatan &amp; Kecantikan
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="description"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Deskripsi
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 pt-4 pb-5 custom-font-1 custom-border-auth"
                  id="description"
                  name="description"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                  onChange={onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Foto Produk
                </label>
                <Input
                  type={[]}
                  id="image"
                  name="image"
                  onChange={onChangeImage}
                >
                  <div className="text-center ml-1 row align-items-center custom-bg-photo-product">
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      className="m-auto custom-font-3"
                    />
                  </div>
                </Input>
              </div>

              <div className="row">
                <div className="col-6">
                  <button className="mt-3 form-group font-weight-bold py-2 w-100 custom-border-button custom-border-auth custom-font-1">
                    Preview
                  </button>
                </div>

                <div className="col-6">
                  <button className="mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                    Terbitkan
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </span>
      </div>
    </div>
  );
}
