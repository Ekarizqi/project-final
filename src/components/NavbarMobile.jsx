/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function NavbarMobile() {
  return (
    <>
      <nav className="navbar navbar-4 custom-bg-nav">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent15"
          aria-controls="navbarSupportedContent15"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="bg-white p-2 custom-border-auth">
            <span className="navbar-toggler-icon"></span>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent15">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <form>
          <div className="inner-addon right-addon custom-space-6">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-muted ml-2 custom-fa"
            />
            <input
              type="text"
              className="form-control ml-2 custom-border-auth"
              placeholder="Cari di sini ..."
            />
          </div>
        </form>
      </nav>
    </>
  );
}
