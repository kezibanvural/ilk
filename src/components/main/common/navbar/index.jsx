import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/app-details">
                App Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand" href="/">
          <Image src="/logos/Size=Full.svg" width={71} height={46} alt="logo"/>
        </Link>
      </nav>
      
    </>
  );
};

export default MainNavbar;
