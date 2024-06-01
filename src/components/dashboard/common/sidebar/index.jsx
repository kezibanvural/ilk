"use client"
import React, { useState } from 'react';
import "./style.scss";

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
    </div>
  )
}

export default DashboardSidebar