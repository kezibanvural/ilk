import React from "react";
import "./style.scss";
import Image from "next/image";

const DashboardAIChatSection = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>
          <p>Hi, lmxai!</p>
          <p>How Can I Help You?</p>
        </h1>
      </div>
      <div className="chat-options container">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div className="col">
              <Image src="/icons/actions/file/State=Default.svg" height={24} width={24} alt="file-icon" />
              <p>Online Coding Classes For Beginners</p>
            </div>
            <div className="col">
              <Image src="/icons/actions/file/State=Default.svg" height={24} width={24} alt="file-icon" />
              <p>Look For History Of The Rubik's Cube</p>
            </div>
            <div className="col">
            <Image src="/icons/actions/file/State=Default.svg" height={24} width={24} alt="file-icon" />
            <p>Pros And Cons Of Artificial Intelligence</p>
            </div>
          </div>
      </div>
      <div className="chat-section">

      </div>
      <form className="chat-input">
        <div>
        <input 
          type="text"
          className="form-control"
          placeholder="Message..."
          name="message"
        />
        <button type="submit">
          <Image src="/icons/ui/dropdown/State=Default.svg" width={28} height={28} alt="arrow-icon" />
        </button>
        </div>
      <small>Lmxai may occasionally produce incorrect information. Please double check before using the information.</small>
      </form>
    </div>
  );
};

export default DashboardAIChatSection;
