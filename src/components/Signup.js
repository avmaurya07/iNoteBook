import React,{useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import NoteContext from "../contex/notes/notecontext";

const Signup = () => {
    const context = useContext(NoteContext);
    const { getUserApi,showAlert } = context;
    let navigate = useNavigate();
    const [sdata, setSdata] = useState({ name:"",email: "", pass: "" });
    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: sdata.name,email: sdata.email, password: sdata.pass }),
    });
    const json = await response.json();
    showAlert(json);
    getUserApi();
    setSdata({name:"", email: "", pass: "" });
    if (json.success) {
      //save the token on local storage and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } 
  };

  const onChange = (e) => {
    setSdata({ ...sdata, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="container">
        <form 
        onSubmit={handleSubmit}
        >
          <h1>SignUp</h1>
          <div className="mb-3">
            <label html htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              value={sdata.name}
            />
          </div>
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
              value={sdata.email}
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
              value={sdata.pass}
            />
          </div>
          {/* <div className="mb-3">
            <label html htmlFor="exampleInputPassword1" className="form-label">
             Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpass"
              name="cpass"
              onChange={onChange}
              value={sdata.pass}
            />
          </div> */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={sdata.email.length < 5 || sdata.pass.length < 5 || sdata.name.length<3}
          >
            SignUp
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
