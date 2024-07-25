import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../contex/notes/notecontext";

const Login = () => {
  const context = useContext(NoteContext);
  const { User } = context;
  const [ldata, setLdata] = useState({ email: "", pass: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    setLdata({ ...ldata, [e.target.name]: e.target.value });
  };


  
  useEffect(() => {
    if (User.name) {
      navigate("/");
    }
   
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: ldata.email, password: ldata.pass }),
    });
    const json = await response.json();
    setLdata({ email: "", pass: "" });
    if (json.success) {
      //save the token on local storage and redirect
      localStorage.setItem("token", json.authtoken);
      console.log(json.authtoken);
      navigate("/");
    } else {
      alert(json.msg);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={ldata.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            name="pass"
            onChange={onChange}
            value={ldata.pass}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <a className="btn btn-primary mx-3" href="/" role="button">
          SignUp
        </a>
      </form>
    </div>
  );
};

export default Login;
