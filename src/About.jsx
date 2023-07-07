import React from "react";
import web from "../src/bg.webp";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Welcome To About Page</h1>
                <h4 className="my-3">
                  We are going to offer you best trip experience
                </h4>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started">Contact Us</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default About;