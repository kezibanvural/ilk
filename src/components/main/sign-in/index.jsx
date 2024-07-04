"use client"
import React, { useState } from 'react'
import { useFormState } from "react-dom";
import "./style.scss"
import Image from 'next/image'
import SocialConnectionButton from '../common/buttons/social-connect-button'
import Link from 'next/link'
import { initialResponse } from '@/helpers/formValidation'
import eyeDefault from '/public/icons/actions/eye/State=Default.svg';
import eyeDisabled from '/public/icons/actions/eye/State=Dissabled.svg';
import SignInButton from '../common/buttons/sign-in';
import { loginAction } from '@/actions/auth-action';

const SignInForm = () => {
  const [state, dispatch] = useFormState(loginAction, initialResponse);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordEye, setShowPasswordEye] = useState(false);

  return (
    <div className="signin-page-form">
      <div className="text">
        <h1>Sign in</h1>
        <p>Please login to continue to your account</p>
      </div>
      <form action={dispatch} noValidate>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            className={`form-control rounded-3 ${
              state?.errors?.email ? "is-invalid" : ""
            }`}
            name="email"
            id="email"
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
            onKeyDown={() => setShowPasswordEye(true)}
          />
          <div className="invalid-feedback">{state?.errors?.password}</div>
          {showPassword ? (
            <Image
              src={eyeDefault}
              className={`passwordEye ${showPasswordEye ? "" : "d-none" }`}
              width={25}
              height={17}
              alt='eyeOpened-icon'
              onClick={(e) => setShowPassword((prev) => !prev)}
            />
          ) : (
            <Image
              src={eyeDisabled}
              className={`passwordEye ${showPasswordEye ? "" : "d-none" }`}
              width={25}
              height={17}
              size={20}
              alt='eyeClosed-icon'
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
        <SignInButton/>
      </form>
      {/* <div className="seperator">
          <span>or</span>
      </div>
      <div className="social-connection">
          <SocialConnectionButton title="Google" status="in" />
          <SocialConnectionButton title="Facebook" status="in" />
      </div> */}
      <div className="text-center mt-3">
        <small>
        Don&apos;t have an account yet?
          <Link href="/sign-up">Sign up</Link>
        </small>
      </div>
    </div>
  )
}

export default SignInForm