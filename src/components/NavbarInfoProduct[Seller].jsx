/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NavbarInfoProduct() {
  return (
    <nav className="navbar navbar-white bg-white fixed-top">
      <div className="container">
        <div className="custom-display">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-responsive-size"
          />
        </div>
        <a className="navbar-brand custom-logo-navbar" href="#"></a>
        <span className="text-center m-auto">
          <span className="text-dark custom-title-nav font-weight-bold">
            Lengkapi Detail Produk
          </span>
        </span>
      </div>
    </nav>
  );
}
