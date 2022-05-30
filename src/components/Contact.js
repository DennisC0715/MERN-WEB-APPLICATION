import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Contact() {
  const history = useHistory();
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = msg;

    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.status === 400 || !res) {
        alert("send message fail");
      } else {
        alert("Message Sent");
        history.push("/");
        setMsg({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="contact"></section>
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fs-5 text-center">Contact</h3>
            <h1 className="display-6 text-center mb-4">
              Have Some <b>Question?</b>
            </h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="" alt="Contact" className="w-75" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={msg.name}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={msg.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="message"
                  value={msg.message}
                  onChange={handleInput}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary rounded-pill"
              >
                Send Message <i className="fa fa-paper-plane ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
