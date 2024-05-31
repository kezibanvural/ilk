import Image from 'next/image'
import React from 'react'
import DashboardNavbarUserSection from './userSection'
import "./style.scss";

const DashboardNavbar = () => {
  return (
    <div className='dashboard-navbar'>
        <Image src="/logos/Size=Small.svg"  width={66} height={70}/>
        <h1>Learning Matrix</h1>
        <DashboardNavbarUserSection/>
    </div>
  )
}

export default DashboardNavbar