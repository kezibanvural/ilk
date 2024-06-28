"use client"
import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";

const ChatNavbarUserSection = () => {
  return (
    <div className="user-section">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image src="/icons/actions/settings/State=Default.svg" width={20} height={20} alt="settings-icon"/>
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" href="/">
              <Image src="/icons/ui/icons/State=DefaultName=Home.svg" width={20} height={17} alt="home-icon" />
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/chat">
              <Image src="/icons/ui/avatar/user-icon.svg" width={20} height={20} alt="user-icon"/>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/chat">
              <Image src="/icons/ui/icons/book-icon.svg" width={22} height={15.48} alt="book-icon"/>
            </Link>
          </li>
        </ul>
      <button>
        <Image src="/icons/actions/info/State=Default.svg" width={24} height={24} alt="info-icon" />
      </button>
      </div>


      <div className="user">
        <Image src="/icons/ui/avatar/avatar-icon.svg" width={33} height={33}alt="avatar-icon" />
        <div>
            <p>Welcome back!
            <span> lmxai</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChatNavbarUserSection;
