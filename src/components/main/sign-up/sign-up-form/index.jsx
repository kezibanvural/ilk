import React from "react";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";

const SignUpForm = () => {
  return (
    <form 
        className="signup-form"
        >
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your email address"
          className="form-control"
        />
      </div>
        <SignUpButton/>
    </form>
  );
};

export default SignUpForm;
