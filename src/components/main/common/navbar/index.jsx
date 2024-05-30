
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.scss"

const MainNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent px-3 z-3">
        <div class="container-fluid">
          <button
            class="navbar-toggler border-0 shadow-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span>
              <Image src="/icons/actions/main-menu/State=Default.svg" width={45} height={45} />
             </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/app-details">
                  App Details
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contact">
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
