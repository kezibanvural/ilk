import SignUpPageForm from '@/components/main/sign-up/page-sign-up-form'
import React from 'react'

const SignUpPage = ({ searchParams }) => {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
      <SignUpPageForm searchParams={searchParams} />
    </div>
  )
}

export default SignUpPage