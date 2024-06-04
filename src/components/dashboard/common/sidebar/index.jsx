"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";

const DashboardSidebar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [closeSidebar, setCloseSidebar] = useState(true);
  
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setCloseSidebar(screenWidth>768 ? true : false)
  }, [screenWidth]);
  
  const handleCloseBtn = () => {
    setCloseSidebar((prev) => !prev);
  };

  return (
    <div
      className={
        closeSidebar ? "dashboard-sidebar" : "dashboard-sidebar closed-panel"
      }
    >
      <button
        onClick={handleCloseBtn}
        className={closeSidebar ? "close-btn x-btn" : "close-btn"}
      >
        <span></span>
        <span></span>
      </button>

      <div className="sidebar-top d-flex flex-column justify-content-start align-items-center h-100 gap-3">
        <button className="new-chat">
          {closeSidebar ? (
            <Image
              src="/icons/ui/icons/add-icon.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
          ) : (
            <Image
              src="/icons/ui/icons/State=Default,Name=Edit.svg"
              width={24}
              height={24}
              alt="new-chat-icon"
            />
          )}
          <span className={closeSidebar ? "" : "d-none"}>New Chat</span>
        </button>
        {closeSidebar ? (
            <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <Image src="/icons/actions/magnifyingGlass/State=Default.svg" width={20} height={20} alt="magnifying-glass" />
                </span>
              </div>
              <input
                type="text"
                class={closeSidebar ? "form-control" : "form-control d-none"}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                name="search"
              />
            </div>
          </form>
          ) : (
            <button className="new-chat bg-white">
                <Image src="/icons/actions/magnifyingGlass/State=Default.svg" width={24} height={24} alt="magnifying-glass" />
            </button>
          )}
        
      </div>
      <div className="sidebar-bottom mb-4">
        <button className="new-chat">
        <Image
              src="/icons/ui/icons/State=Default,Name=Statistic.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
        </button>
        <button className="new-chat">
        <Image
              src="/icons/ui/icons/State=Default,Name=Profile.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
        </button>
        <button className="new-chat">
        <Image
              src="/icons/ui/icons/State=Default,Name=Notification.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
        </button>
        <button className="new-chat">
        <Image
              src="/icons/ui/icons/State=Default,Name=Logout.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
