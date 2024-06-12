import Image from 'next/image'
import React from 'react'
import DashboardNavbarUserSection from './userSection'
import "./style.scss";

const DashboardNavbar = () => {
  return (
    <div className='dashboard-navbar'>
        <div className='school-name'>
        <Image src="/logos/Size=Small.svg"  width={66} height={70} alt='logo'/>
        <h1>Learning Matrix</h1>
        </div>
        <DashboardNavbarUserSection/>
    </div>
  )
}

export default DashboardNavbar