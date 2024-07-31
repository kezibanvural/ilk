"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import history from "./history.json";
import { swalConfirm } from "@/helpers/swal";
import { signOut } from "next-auth/react";
import { newChatAction } from "@/actions/chat-action";
import ChatHistoryAccordion from "./chat-history-accordion";

const ChatSidebar = ({allChatHistoryData}) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [closeSidebar, setCloseSidebar] = useState(true);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setCloseSidebar(screenWidth > 992 ? true : false);
  }, [screenWidth]);

  const handleCloseBtn = () => {
    setCloseSidebar((prev) => !prev);
  };

  const handleLogout = async () => {
    const resp = await swalConfirm("Are you sure");
    if (!resp.isConfirmed) return;

    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="sidebar m-0 p-0">
      <button
        onClick={handleCloseBtn}
        className={closeSidebar ? "close-btn x-btn" : "close-btn"}
      >
        <span></span>
        <span></span>
      </button>
      <div
        className={closeSidebar ? "chat-sidebar" : "chat-sidebar closed-panel"}
      >
        <div className="sidebar-top">
          <button className="new-chat" onClick={newChatAction}>
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
              <div className="input-group mb-3">
                <div className="input-group-prepend p-0">
                  <span className="input-group-text" id="basic-addon1">
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
                  className={
                    closeSidebar ? "form-control" : "form-control d-none"
                  }
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
            <ChatHistoryAccordion allChatHistoryData={allChatHistoryData}/>
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
          <button className="new-chat" onClick={handleLogout}>
            <Image
              src="/icons/ui/icons/State=Default,Name=Logout.svg"
              width={24}
              height={24}
              alt="add-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
