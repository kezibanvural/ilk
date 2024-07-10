"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import history from "./history.json";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { swalConfirm } from "@/helpers/swal";

const ChatSidebar = () => {
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
    const resp = await swalConfirm("Are you sure to logout");
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
        className={
          closeSidebar ? "chat-sidebar" : "chat-sidebar closed-panel"
        }
      >
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
            <div className="accordion" id="chatHistory">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                  data-bs-parent="#chatHistory"
                >
                  <div className="accordion-body">
                    <ul>
                      {history.today.map((item) => (
                        <li key={item.id}>
                          <div>
                            <Image
                              src="/icons/actions/file/State=Default.svg"
                              height={24}
                              width={24}
                              alt="file-icon"
                            />
                            <span>{item.title}</span>
                          </div>
                          <div className="dropdown">
                            <button
                              className="dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <Image
                                src="icons/ui/icons/ellipsis-icon.svg"
                                width={21.6}
                                height={4.45}
                                alt="ellipsis-icon"
                              />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Share.svg"
                                    width={20}
                                    height={20}
                                    alt="home-icon"
                                  />
                                  <span>Share</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Rename.svg"
                                    width={19}
                                    height={20}
                                    alt="book-icon"
                                  />
                                  <span>Rename</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Archive.svg"
                                    width={20}
                                    height={20}
                                    alt="user-icon"
                                  />
                                  <span>Archive</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Clear.svg"
                                    width={20}
                                    height={20}
                                    alt="user-icon"
                                  />
                                  <span>Delete</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#chatHistory"
                >
                  <div className="accordion-body">
                    <ul>
                      {history.yesterday.map((item) => (
                        <li key={item.id}>
                          <div>
                            <Image
                              src="/icons/actions/file/State=Default.svg"
                              height={24}
                              width={24}
                              alt="file-icon"
                            />
                            <span>{item.title}</span>
                          </div>
                          <div className="dropdown">
                            <button
                              className="dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <Image
                                src="icons/ui/icons/ellipsis-icon.svg"
                                width={21.6}
                                height={4.45}
                                alt="ellipsis-icon"
                              />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Share.svg"
                                    width={20}
                                    height={20}
                                    alt="home-icon"
                                  />
                                  <span>Share</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Rename.svg"
                                    width={19}
                                    height={20}
                                    alt="book-icon"
                                  />
                                  <span>Rename</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Archive.svg"
                                    width={20}
                                    height={20}
                                    alt="user-icon"
                                  />
                                  <span>Archive</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="/chat"
                                >
                                  <Image
                                    src="/icons/ui/icons/State=Default,Name=Clear.svg"
                                    width={20}
                                    height={20}
                                    alt="user-icon"
                                  />
                                  <span>Delete</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
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
