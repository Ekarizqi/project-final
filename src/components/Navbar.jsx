/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { useEffect } from "react";
import EventBus from "../common/EventBus";

export default function Navbar() {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("Logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

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
                    to={"/home-account"}
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
                  <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to={"/"}
                    onClick={logOut}
                  >
                    Logout
                  </Link>
                </li>
                </li>
              </ul>
            </div>

            <Link to={"/info-product-tawar"}>
              <FontAwesomeIcon icon={faBell} className="btn" />
            </Link>

            <Link to={"/info-profile"}>
              <FontAwesomeIcon icon={faUser} className="btn" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
