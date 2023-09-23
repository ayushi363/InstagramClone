import React from "react";
import { Link } from "react-router-dom";
import socialDesktop from "../images/social media img.PNG";
import socialMobile from "../images/social-mobile.PNG";

const Signup = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            className="socialDesktop"
            style={{ height: "80%" }}
            src={socialDesktop}
            alt="img1 here"
          />
          <img className="socialMobile" src={socialMobile} alt="img2 here" />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="card shadow">
            <div className="card-body px-5">
              <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
              <form>
                <input
                  type="text"
                  className="form-control input-bg mt-4 mb-2 p-2"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  className="form-control input-bg mb-2 p-2"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control input-bg mb-2 p-2"
                  placeholder="Full Name"
                />

                <input
                  type="password"
                  className="form-control input-bg my-2 p-2 mb-2"
                  placeholder="Password"
                />

                <div className="d-grid mt-3">
                  <button className="custom-btn custom-btn-blue">
                    Sign Up
                  </button>
                </div>
                <div className="my-4">
                  <hr className="text-muted" />
                  <h5 className="text-muted text-center">OR</h5>
                  <hr className="text-muted" />
                </div>
                <div className="mt-3 mb-5 d-grid fs-6">
                  <button className="custom-btn custom-btn-white">
                    <span className="text-muted">Already have an account?</span>
                    <Link to="/login" className="ms-1 text-info fw-bold">
                      Log In
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
