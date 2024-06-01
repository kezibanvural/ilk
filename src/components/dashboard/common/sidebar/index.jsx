"use client"
import React, { useState } from 'react';
import "./style.scss";
import Image from 'next/image';

const DashboardSidebar = () => {

    const [closeSidebar, setCloseSidebar] = useState(true)

    const handleCloseBtn = () => { 
        setCloseSidebar(prev => !prev)
     }

  return (
    <div className={closeSidebar ? "dashboard-sidebar" : "dashboard-sidebar closed-panel"}>
        <button 
            onClick={handleCloseBtn}
            className={closeSidebar ? "close-btn x-btn" : "close-btn"} 
            >
            <span></span>
            <span></span>
        </button>

        <button className='new-chat'>
            <Image src="/icons/ui/icons/add-icon.svg" width={24} height={24} alt='add-icon' />
            <span className={closeSidebar ? "" : "d-none"}>New Chat</span>
        </button>
    </div>
  )
}

export default DashboardSidebar