import React from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default function Register() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 custom-bg-auth">
          <div className="custom-space"></div>
        </div>
        <div className="col-md-6">
          <div className="row p-4 w-75 mx-auto align-items-center custom-space-2">
            <div className="col-md-12">
              <h4 className="text-dark font-weight-bold">Daftar</h4>

              <Form>
                <div className="form-group mb-3">
                  <label
                    htmlFor="username"
                    className="text-dark mb-1 custom-font-2"
                  >
                    Nama
                  </label>
                  <Input
                    type="text"
                    className="form-control p-2 custom-font-1"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div className="form-group mb-3">
                  <label
                    htmlFor="email"
                    className="text-dark mb-1 custom-font-2"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    className="form-control p-2 custom-font-1"
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="password"
                    className="text-dark mb-1 custom-font-2"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    className="form-control p-2 custom-font-1"
                    placeholder="Masukkan password"
                  />
                </div>

                <button className="mt-3 form-group font-weight-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                  Daftar
                </button>
                <p className="text-center text-dark custom-font-1">
                  Sudah punya akun ? &nbsp;
                  <span>
                    <Link to={"/login"} className="font-weight-bold custom-font-auth">
                      Masuk di sini
                    </Link>
                  </span>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
