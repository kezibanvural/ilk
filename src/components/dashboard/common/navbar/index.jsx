import Image from 'next/image'
import React from 'react'
import DashboardNavbarUserSection from './userSection'
import "./style.scss";

const DashboardNavbar = () => {
  return (
    <div className='dashboard-navbar'>
        <div className='school-name'>
        <Image src="/logos/Size=Small.svg"  width={66} height={66} alt='logo'/>
        <h1>lk.ai</h1>
        </div>
        <DashboardNavbarUserSection/>
    </div>
  )
}

export default DashboardNavbar