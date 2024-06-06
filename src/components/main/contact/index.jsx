"use client"
import { createMessageAction } from '@/actions/contact-message-action';
import { initialResponse } from '@/helpers/formValidation';
import React from 'react'
import { useFormState, useFormStatus } from "react-dom";
import "./style.scss"
import SubmitButton from '@/components/common/buttons/submit-button';

const ContactMessageForm = () => {

    const [state, dispatch] = useFormState(createMessageAction, initialResponse);

  return (
    <div className="contact-page-form">
        <div className="text">
        <h1>Contact Us</h1>
        {/* <p>Please login to continue to your account</p> */}
      </div>
        <form action={dispatch} noValidate>
        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            className={`form-control rounded-3 ${
              state?.errors?.firstName ? "is-invalid" : ""
            }`}
            name="firstName"
            id="firstName"
          />
          <div className="invalid-feedback">{state?.errors?.firstName}</div>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Last Name"
            className={`form-control rounded-3 ${
              state?.errors?.lastName ? "is-invalid" : ""
            }`}
            name="lastName"
            id="lastName"
          />
          <div className="invalid-feedback">{state?.errors?.lastName}</div>
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
          />
          <div className="invalid-feedback">{state?.errors?.email}</div>
        </div>
        <div className="input-group">
              <div>
                <textarea
                  className={`form-control ${
                    state?.errors?.message ? "is-invalid" : ""
                  }`}
                  placeholder="Message"
                  id="message"
                  name="message"
                ></textarea>
                <div className="invalid-feedback">{state?.errors?.message}</div>
              </div>
            </div>
            <SubmitButton/>
      </form>
    </div>
  )
}

export default ContactMessageForm