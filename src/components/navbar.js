import React, { useContext, useEffect } from "react";
import NoteContext from "../contex/notes/notecontext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const context = useContext(NoteContext);
  const { User, getUserApi } = context;
  // let navigate = useNavigate();
  // const autoLogin = async () => {
  //   await getUserApi;
  //   if (User.name) {
  //     // navigate("/");
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {User.name && (
          <a className="navbar-brand" href="/">
            iNoteBook
          </a>
        )}
        {!User.name && (
          <a className="navbar-brand" href="/login">
            iNoteBook
          </a>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {User.name && (
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                About
              </a>
            </li>
          </ul>
          {User.name && <h6 className="mx-2">Hello, {User.name} </h6>}
          {User.name && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}

          {!User.name && (
            <button
              className="btn btn-primary mx-2"
              onClick={getUserApi}
              type="submit"
            >
              Login
            </button>
          )}
          {!User.name && (
            <a className="btn btn-primary mx-2" href="/signup" role="button">SignUp</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
