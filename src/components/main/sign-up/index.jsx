import React from "react";
import "./style.scss";
import MainNavbar from "../common/navbar";
import SignUpForm from "./sign-up-form";
import Link from "next/link";

const SignUpSection = () => {
  return (
    <div className="signup-container">
      <MainNavbar />
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="w-75 w-md-100">
              <h1>
                <span>Welcome to </span>
                <span>Learning Matrix</span>
              </h1>
              <p>Before you dive in, let's get you started!</p>
              <SignUpForm />
              <div className="text-end mt-3 ">
                <small>
                  Already have an account?
                  <Link href="/sign-in">Sign in</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
