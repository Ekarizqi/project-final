import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <h4 className="text-dark font-weight-bold">Masuk</h4>

              <Form>
                <div className="form-group mb-3">
                  <label
                    htmlFor="email"
                    className="text-dark mb-1 custom-font-2"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
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
                  <div className="inner-addon right-addon">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-muted ml-2 custom-fa"
                    />

                    <Input
                      type="password"
                      className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                      placeholder="Masukkan password"
                    />
                  </div>
                </div>

                <button className="mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                  Masuk
                </button>
                <p className="text-center text-dark custom-font-1 custom-responsive-space">
                  Belum punya akun ? &nbsp;
                  <span>
                    <Link to={"/"} className="font-weight-bold custom-font-auth">
                      Daftar di sini
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
