import React from "react";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                ipsum. Iure cumque corrupti esse quaerat unde, nostrum totam,
                illo odio provident iusto accusamus et deleniti tempore est
                ipsam porro! Porro, cupiditate cumque perferendis corrupti
                inventore natus? Voluptas ullam iste tempore sapiente, ipsa
                error deleniti vel nesciunt laudantium molestias fugiat quis?
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
