"use client"
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import "./style.scss";
import SignUpButton from "../../common/buttons/sign-up";
import Link from "next/link";
import { signUpMainAction } from "@/actions/signUpAction";
import { initialResponse } from "@/helpers/formValidation";
import { useRouter } from "next/navigation";

const MainSignUpForm = () => {

  const [state, dispatch] = useFormState(signUpMainAction, initialResponse);
  const router = useRouter();

  useEffect(() => {
    const email = state.data ? state.data : null
    localStorage.setItem("directedEmail", email)
    if(state.success){
      router.push(`/sign-up`)
    }
  }, [state]);
  return (
    <form 
      className="signup-form"
      action={dispatch}
      noValidate
      >
      <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center gap-3 flex-wrap flex-md-nowrap">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`form-control rounded-5 mt-3 ${
                  state?.errors?.email ? "is-invalid" : ""
                }`}
                name="email"
                id="email"
              />
              <div className="invalid-feedback">
                {state?.errors?.email}
              </div>
            </div>
            <SignUpButton />
          </div>
          <div className="col-12">
            <div className="text-end mt-3 ">
              <small>
                Already have an account?
                <Link href="/sign-in">Sign in</Link>
              </small>
            </div>
          </div>
        </div>
    </form>
  );
};

export default MainSignUpForm;
