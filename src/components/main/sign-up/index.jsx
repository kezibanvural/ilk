import React from "react";
import "./style.scss";
import MainNavbar from "../common/navbar";
import MainLogo from "../common/main-logo";

const MainSection = ({ children }) => {
  return (
    <div className="main-container">
      <MainNavbar />
      <MainLogo/>
      {children}
    </div>
  );
};

export default MainSection;
