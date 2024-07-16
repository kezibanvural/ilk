import SignUpPageForm from '@/components/main/sign-up/page-sign-up-form'
import React from 'react'

import { parseJwt } from '@/helpers/auth';

const SignUpPage = ({ searchParams }) => {

  const directedEmail = parseJwt(searchParams.email)
  console.log("directedEmail",directedEmail);

  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
      <SignUpPageForm  directedEmail={directedEmail.email} />
    </div>
  )
}

export default SignUpPage