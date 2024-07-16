"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import "@/styles/index.scss"

const NotFound = () => {
    const router = useRouter()
  return (
    <div className="container">
			<div className="row g-5 g-sm-0 align-items-center rounded-5 overflow-hidden" style={{backgroundColor:"#D4D7C6"}}>
				<div className="col-lg-6">
					<Image
						src="/images/errorPages/notFoundPage.png"
						className="img-fluid w-lg-auto w-100 rounded-5"
						width={500}
						height={500}
						alt="Not found"
					/>
				</div>
				<div className="col-lg-6 text-center mb-sm-5 p-5 p-lg-0">
					<h2>Oops! It looks like you&apos;re lost</h2>
					<p>
						The page you&apos;re looking for isn&apos;t avaliable. Try to search again or use the go to:
					</p>
					<button className="btn p-2 fs-5" style={{backgroundColor:"#F7C917"}} 	
						onClick={() => router.push('/')}>
						Go to Home Page
						
					</button>
				</div>
			</div>
		</div>
  )
}

export default NotFound