"use client"
import React, { useState } from 'react'
import { useFormState } from "react-dom";
import "./style.scss"
import Image from 'next/image'
import SignUpButton from '../common/buttons/sign-up'
import SocialConnectionButton from '../common/buttons/social-connect-button'
import Link from 'next/link'
import { initialResponse } from '@/helpers/formValidation'
import { signUpPageAction } from '@/actions/signUpAction'
import eyeDefault from '/public/icons/actions/eye/State=Default.svg';
import eyeDisabled from '/public/icons/actions/eye/State=Dissabled.svg';

const SignInForm = () => {
    const [state, dispatch] = useFormState(signUpPageAction, initialResponse);
    const [showPassword, setShowPassword] = useState(false);

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
          />
          <div className="invalid-feedback">{state?.errors?.password}</div>
          {showPassword ? (
            <Image
              src={eyeDefault}
              className="passwordEye"
              width={25}
              height={17}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <Image
              src={eyeDisabled}
              className="passwordEye"
              width={25}
              height={17}
              size={20}
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
          <SocialConnectionButton title="Google" status="in" />
          <SocialConnectionButton title="Facebook" status="in" />
      </div>
      <div className="text-center mt-3">
        <small>
        Don’t have an account yet?
          <Link href="/sign-up">Sign up</Link>
        </small>
      </div>
    </div>
  )
}

export default SignInForm