/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-white bg-white fixed-top navbar-8">
      <div className="container">
        <div className="d-flex">
          <a className="navbar-brand custom-logo-navbar" href="#"></a>
          <form>
            <div className="inner-addon right-addon custom-space-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-muted ml-2 custom-fa"
              />
              <input
                type="text"
                className="form-control ml-2 custom-border-auth custom-bg-notif"
                placeholder="Cari di sini ..."
              />
            </div>
          </form>
        </div>
        <div className="inner-addon left-addon custom-space-nav custom-button-auth custom-border-button custom-border-search">
          <a href="/register">
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="text-white custom-fa"
            />
            <div className="row align-items-center">
              <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">Masuk</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
