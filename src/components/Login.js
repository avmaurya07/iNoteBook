import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contex/notes/notecontext";
import config from "../config";
const host = config.host;

const Login = () => {
  const ref = useRef(null);
  const context = useContext(NoteContext);
  const { getUserApi, showAlert } = context;
  const [ldata, setLdata] = useState({ email: "", pass: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    setLdata({ ...ldata, [e.target.name]: e.target.value });
  };
  const onSignUp = () => {
    navigate("/signup");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: ldata.email, password: ldata.pass }),
    });
    const json = await response.json();
    showAlert(json);
    getUserApi();
    setLdata({ email: "", pass: "" });
    if (json.success) {
      //save the token on local storage and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      window.location.reload(true);
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="mb-3">
            <label html htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              value={ldata.systemid}
            />
          </div>
          <div className="mb-3">
            <label html htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="pass"
              onChange={onChange}
              value={ldata.password}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mx-2"
            disabled={ldata.email.length < 5 || ldata.pass.length < 5}
          >
            Login
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={onSignUp}
          >
            SignUp
          </button>
        </form>
        <div class="form-check">
          {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label> */}
        </div>
      </div>

      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >SignUp</button>
       */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" ref={ref}>
                Register Yourself
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};
export default Login;
