import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="container my-4">
      <div class="row">
        <div class="col text-center">
          <h1 className="display-4 fw-bolder my-3">
            Welcome to Dashboard Page
          </h1>
          <h1 className="display-7 my-3">UserName</h1>
          <NavLink
            to="/Logout"
            className="btn btn-outline-primary ms-2 px-4 rounded-pill my-4"
          >
            <i className="fa fa-sign-out me-2"></i>Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
