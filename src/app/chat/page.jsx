import DashboardAIChatSection from '@/components/chat/chatSection';
import React from 'react'

export const metadata = {
    title: "AI Chat",
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