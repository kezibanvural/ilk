"use client";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { signUpPageAction } from "@/actions/signUpAction";
import { initialResponse } from "@/helpers/formValidation";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";
import Link from "next/link";
import Image from "next/image";
import eyeDefault from "/public/icons/actions/eye/State=Default.svg";
import eyeDisabled from "/public/icons/actions/eye/State=Dissabled.svg";
import { useRouter } from "next/navigation";
import { swalToast } from "@/helpers/swal";
import { parseJwt } from "@/helpers/auth";

const SignUpPageForm = () => {
  const [state, dispatch] = useFormState(signUpPageAction, initialResponse);
  const [showPassword, setShowPassword] = useState(false);
  const [directedEmail, setDirectedEmail] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("directedEmail") === "null") {
      setDirectedEmail("");
    } else {
      const email = parseJwt(localStorage.getItem("directedEmail"));
      setDirectedEmail(email.email);
    }
  }, []);

  useEffect(() => {
    if (state?.success) {
      swalToast(state.data.message, "success");
      setTimeout(() => {
        router.push(`/sign-in`);
      }, 1000);
    }
  }, [state, router]);

  return (
    <div className="signup-page-form">
      <div className="text">
        <h1>Sign up</h1>
        <p>Please sign up to create your account</p>
      </div>
      {!state.success && state?.data?.email ? (
        <div className="alert alert-danger">Email must be unique!</div>
      ) : !state.success && state?.data?.student_number ? (
        <div className="alert alert-danger">User with this student number already exists.</div>
      ) : !state.success && state?.message ? (
        <div className="alert alert-danger">{state.data.message}</div>
      ) : null}

      <form action={dispatch} noValidate>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                className={`form-control rounded-3 ${
                  state?.errors?.first_name ? "is-invalid" : ""
                }`}
                name="first_name"
                id="first_name"
              />
              <div className="invalid-feedback">
                {state?.errors?.first_name}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="Last Name"
                className={`form-control rounded-3 ${
                  state?.errors?.last_name ? "is-invalid" : ""
                }`}
                name="last_name"
                id="last_name"
              />
              <div className="invalid-feedback">{state?.errors?.last_name}</div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                className={`form-control rounded-3 ${
                  state?.errors?.email || state.data?.email ? "is-invalid" : ""
                }`}
                name="email"
                id="email"
                defaultValue={directedEmail}
              />
              <div className="invalid-feedback">{state?.errors?.email}</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group">
              <input
                type="number"
                placeholder="Student Number"
                className={`form-control rounded-3 ${
                  state?.errors?.student_number || state.data?.student_number ? "is-invalid" : ""
                }`}
                name="student_number"
                id="student_number"
              />
              <div className="invalid-feedback">
                {state?.errors?.student_number}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group">
              <input
                type="number"
                placeholder="Post Code"
                className={`form-control rounded-3 ${
                  state?.errors?.post_code ? "is-invalid" : ""
                }`}
                name="post_code"
                id="post_code"
                defaultValue="2923"
              />
              <div className="invalid-feedback">{state?.errors?.post_code}</div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group">
              <textarea
                className={`form-control ${
                  state?.errors?.address ? "is-invalid" : ""
                }`}
                placeholder="Address"
                id="address"
                name="address"
                defaultValue="Krimpen aan den IJssel"
              ></textarea>
              <div className="invalid-feedback">{state?.errors?.address}</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
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
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group password-group">
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                placeholder="Confirm Password"
                className={`form-control rounded-3 ${
                  state?.errors?.confirmPassword ? "is-invalid" : ""
                }`}
                name="confirmPassword"
                id="confirmPassword"
              />
              <div className="invalid-feedback">
                {state?.errors?.confirmPassword}
              </div>
              {showConfirmPassword ? (
                <Image
                  src={eyeDefault}
                  className="passwordEye"
                  width={25}
                  height={17}
                  alt="eyeOpened-icon"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              ) : (
                <Image
                  src={eyeDisabled}
                  className="passwordEye"
                  width={25}
                  height={17}
                  size={20}
                  alt="eyeClosed-icon"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              )}
            </div>
          </div>
          <div className="col-12">
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
              <div className="invalid-feedback">
                {state?.errors?.privacyPolicy}
              </div>
            </div>
          </div>
        </div>
        <SignUpButton />
      </form>
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
