import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const IconButton = ({ text, icon, type }) => {
  return (
    <div className="d-none d-md-block p-1">
      <button type="button" className={`btn btn-sm ${type}`}>
        <i className={`fas ${icon}`}></i> {text}
      </button>
    </div>
  );
};

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex container-fluid  align-items-center justify-content-between">
          <div className="pt-1">
            <Link to="/" className="navbar-brand h3 fw-bold">
              mement
            </Link>
          </div>

          <div className="d-none d-sm-block" style={{ minWidth: '40%' }}>
            <div className="input-group search">
              <input
                id="search-input"
                type="text"
                className="form-control border-end-0 border"
                placeholder="Search Something"
                aria-label="search-icon"
              />

              <span className="input-group-append border-0">
                <button className="btn btn-outline-secondary bg-white border ms-n5">
                  <i className="fas fa-search" />
                </button>
              </span>
            </div>
          </div>

          <div className="tail d-flex">
            <IconButton
              text="Dark Mode"
              icon="fa-moon"
              type="btn-outline-secondary"
            ></IconButton>
            <IconButton text="LogIn" icon="fa-user" type="btn-primary"></IconButton>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
