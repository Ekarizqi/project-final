/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function NavbarHomeMobile() {
  return (
    <>
      <nav className="px-4 py-4 custom-bg-nav custom-toogler">
        <div className="row">
          <div className="col-2">
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
                <div className="nav-item active">
                  <a className="nav-link text-white px-2 custom-border-search custom-button-auth" href="/register">
                    Masuk <span className="sr-only">(current)</span>
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-10 pt-2">
            <form>
              <div className="inner-addon right-addon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-muted ml-2 custom-fa"
                />
                <input
                  type="text"
                  className="form-control ml-2 custom-border-auth border"
                  placeholder="Cari di sini ..."
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
