"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { signUpPageAction } from "@/actions/signUpAction";
import { initialResponse } from "@/helpers/formValidation";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";
import Link from "next/link";
import Image from "next/image";
import eyeDefault from '/public/icons/actions/eye/State=Default.svg';
import eyeDisabled from '/public/icons/actions/eye/State=Dissabled.svg';
import SocialConnectionButton from "../../common/buttons/social-connect-button";

const SignUpPageForm = ({ searchParams }) => {
  const [state, dispatch] = useFormState(signUpPageAction, initialResponse);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-page-form">
      <div className="text">
        <h1>Sign up</h1>
        <p>Please sign up to create your account</p>
      </div>
      <form action={dispatch} noValidate>
        <div className="input-group">
          <input
            type="text"
            placeholder="Your Name"
            className={`form-control rounded-3 ${
              state?.errors?.name ? "is-invalid" : ""
            }`}
            name="name"
            id="name"
          />
          <div className="invalid-feedback">{state?.errors?.name}</div>
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            className={`form-control rounded-3 ${
              state?.errors?.email ? "is-invalid" : ""
            }`}
            name="email"
            id="email"
            defaultValue={searchParams.email}
          />
          <div className="invalid-feedback">{state?.errors?.email}</div>
        </div>
        <div className="input-group password-group">
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            className={`form-control rounded-3 ${
              state?.errors?.password ? "is-invalid" : ""
            }`}
            name="password"
            id="password"
          />
          <div className="invalid-feedback">{state?.errors?.password}</div>
          {showPassword ? (
            <Image
              src={eyeDefault}
              className="passwordEye"
              width={25}
              height={17}
              alt='eyeOpened-icon'
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <Image
              src={eyeDisabled}
              className="passwordEye"
              width={25}
              height={17}
              size={20}
              alt='eyeClosed-icon'
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
        <SignUpButton />
      </form>
      <div className="seperator">
          <span>or</span>
      </div>
      <div className="social-connection">
          <SocialConnectionButton title="Google" status="up"/>
          <SocialConnectionButton title="Facebook" status="up"/>
      </div>
      <div className="text-center mt-3">
        <small>
          Already have an account?
          <Link href="/sign-in">Sign in</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUpPageForm;
