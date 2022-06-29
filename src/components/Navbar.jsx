/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="custom-responsive-display">
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
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent15"
              aria-controls="navbarSupportedContent15"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent15"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to={"/dashboard-product-buyer"}
                  >
                    Dashboard Buyer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to={"/dashboard-jual-seller"}
                  >
                    Dashboard Seller
                  </Link>
                </li>
              </ul>
            </div>

            <FontAwesomeIcon icon={faBell} className="btn" />
            <FontAwesomeIcon icon={faUser} className="btn" />
          </div>
        </div>
      </nav>
    </div>
  );
}
