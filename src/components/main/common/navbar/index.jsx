"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.scss"
import { usePathname } from "next/navigation";

const MainNavbar = () => {
  const router = usePathname();
  console.log(router);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-3 z-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0 shadow-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span>
              <Image src="/icons/actions/main-menu/State=Default.svg" width={45} height={45} alt="logo"/>
             </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={router==="/" ? "active nav-link" : "nav-link"} aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={router==="/contact" ? "active nav-link" : "nav-link"} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
