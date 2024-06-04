import DashboardAIChatSection from '@/components/dashboard/chatSection';
import React from 'react'

export const metadata = {
    title: "Dashboard",
    description: "Learning Matrix AI Power in Education",
  };

const DashboardPage = () => {
  return (
    <div className='container'>
      <DashboardAIChatSection/>
    </div>
  )
}

export default DashboardPage