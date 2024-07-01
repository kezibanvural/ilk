"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { signUpPageAction } from "@/actions/signUpAction";
import { initialResponse } from "@/helpers/formValidation";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";
import Link from "next/link";
import Image from "next/image";
import eyeDefault from "/public/icons/actions/eye/State=Default.svg";
import eyeDisabled from "/public/icons/actions/eye/State=Dissabled.svg";
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
            placeholder="Your First Name"
            className={`form-control rounded-3 ${
              state?.errors?.first_name ? "is-invalid" : ""
            }`}
            name="first_name"
            id="first_name"
          />
          <div className="invalid-feedback">{state?.errors?.first_name}</div>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Your Last Name"
            className={`form-control rounded-3 ${
              state?.errors?.last_name ? "is-invalid" : ""
            }`}
            name="last_name"
            id="last_name"
          />
          <div className="invalid-feedback">{state?.errors?.last_name}</div>
        </div>
        <div className="input-group">
          <input
            type="number"
            placeholder="Student Number"
            className={`form-control rounded-3 ${
              state?.errors?.student_number ? "is-invalid" : ""
            }`}
            name="student_number"
            id="student_number"
          />
          <div className="invalid-feedback">{state?.errors?.student_number}</div>
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
              alt="eyeOpened-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <Image
              src={eyeDisabled}
              className="passwordEye"
              width={25}
              height={17}
              size={20}
              alt="eyeClosed-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
        <div className="form-check">
          <input
            className={`form-check-input ${
              state?.errors?.privacyPolicy ? "is-invalid" : ""
            }`}
            type="checkbox"
            id="privacyPolicy"
            name="privacyPolicy"
          />
          <label className="form-check-label" htmlFor="privacyPolicy">
            I understand and agree to Learning Matrix AI&apos;s
            <Link href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </label>
          <div className="invalid-feedback">{state?.errors?.privacyPolicy}</div>
        </div>
        <input type="hidden" name="post_code" value="2923"/>
        <input type="hidden" name="address" value="Krimpen aan den IJssel"/>
        <SignUpButton />
      </form>
      <div className="seperator">
        <span>or</span>
      </div>
      <div className="social-connection">
        <SocialConnectionButton title="Google" status="up" />
        <SocialConnectionButton title="Facebook" status="up" />
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
