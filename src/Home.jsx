import React from "react";
import web from "../src/download.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>Welcome To Home Page</h1>
                <h2 className="my-3">
                  We are going to offer you best trip experience
                </h2>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} style={{height:"400px"}} className="img-fluid animated" alt="home"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Home;