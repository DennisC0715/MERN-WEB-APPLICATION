import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object deStructuring
    //Store object data into variables
    const { username, email, password } = user;
    try {
      //It is submitted on port 3000 by default
      //Which is Front End but we need to Submit it on Back End Which is on
      //Port 3001,  proxy is add in package.josn proxy.
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Register failed");
      } else {
        window.alert("Registered successfully");
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container shadow my-5 ">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center form p-5 text-white justify-content-center order-2">
            <h1 className="display-4 fw-bolder">Hello, Welcome</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill p-2 w-50"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-1">REGISTER</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label for="name" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill w-100"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
