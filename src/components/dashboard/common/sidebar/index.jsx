"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import history from "./history.json";

const DashboardSidebar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [closeSidebar, setCloseSidebar] = useState(true);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setCloseSidebar(screenWidth > 768 ? true : false);
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

      <div className="sidebar-top">
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
                  <Image
                    src="/icons/actions/magnifyingGlass/State=Default.svg"
                    width={20}
                    height={20}
                    alt="magnifying-glass"
                  />
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
            <Image
              src="/icons/actions/magnifyingGlass/State=Default.svg"
              width={24}
              height={24}
              alt="magnifying-glass"
            />
          </button>
        )}

        <div className={closeSidebar ? "history" : "history d-none"}>
          <h6>Recent Converstaions</h6>
          <div class="accordion" id="chatHistory">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Today
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#chatHistory"
              >
                <div class="accordion-body">
                  <ul>
                  {
                    history.today.map((item)=> (
                      <li key={item.id}>
                        <div>
                        <Image src="/icons/actions/file/State=Default.svg" height={24} width={24} alt="file-icon" />
                        <span>{item.title}</span>
                        </div>
                      </li>
                    ))
                  }
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Yesterday
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#chatHistory"
              >
                <div class="accordion-body">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
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
