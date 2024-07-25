import React, { useContext } from "react";
import NoteContext from "../contex/notes/notecontext";

const Navbar = () => {
  const context = useContext(NoteContext);
  const { User} = context;
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload(true);
  }
  
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
            <button
            className="btn btn-danger mx-2"
            onClick={handleLogout}
          >
            Logout
          </button>
          )}

          {!User.name && (
            // <button className="btn btn-primary mx-2">Login</button>
            <a className="btn btn-primary mx-2" href="/login" role="button">Login</a>

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
