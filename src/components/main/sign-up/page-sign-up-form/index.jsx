"use client";
import React from "react";
import { useFormState } from "react-dom";
import { signUpPageAction } from "@/actions/signUpAction";
import { initialResponse } from "@/helpers/formValidation";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";
import Link from "next/link";

const SignUpPageForm = ({ searchParams }) => {
  const [state, dispatch] = useFormState(signUpPageAction, initialResponse);

  return (
    <div className="signup-page-form">
      <div className="text">
        <h1>Sign up</h1>
        <p>Please sign up to create your account</p>
      </div>
      <form action={dispatch} noValidate>
        <div className="input-group mb-3">
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
        <div className="input-group mb-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className={`form-control rounded-3 ${
              state?.errors?.email ? "is-invalid" : ""
            }`}
            name="email"
            id="email"
            defaultValue={searchParams.email}
          />
          <div className="invalid-feedback">{state?.errors?.email}</div>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            placeholder="Enter your email address"
            className={`form-control rounded-3 ${
              state?.errors?.password ? "is-invalid" : ""
            }`}
            name="password"
            id="password"
          />
          <div className="invalid-feedback">{state?.errors?.password}</div>
        </div>
        <SignUpButton/>
      </form>
      <div className="text-center mt-3">
      <small>
        Already have an account?
        <Link href="/sign-in">
            Sign in
        </Link>
      </small>
      </div>
    </div>
  );
};

export default SignUpPageForm;
