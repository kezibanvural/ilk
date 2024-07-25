"use client"
import SignUpPageForm from '@/components/main/sign-up/page-sign-up-form'
import React from 'react'
import { useRouter } from "next/navigation";


const SignUpPage = () => {

  const router = useRouter();
  console.log("/*/*/*",router.query);

  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
      <SignUpPageForm />
    </div>
  )
}

export default SignUpPage