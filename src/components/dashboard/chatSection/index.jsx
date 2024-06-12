"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";

const DashboardAIChatSection = () => {
  const [chat, setChat] = useState(false);
  const [inputValue, setInputValue] = useState("")

  const handleChat = async () => {
    setChat(true);
    
    const url = `https://8509-01hw0ajtd083fjct2wwgvbjt3g.cloudspaces.litng.ai`;
    const options = { method: "GET" };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("inputValue",inputValue);

  return (
    <div className="chat-container  gap-4">
      {chat ? (
        <div className="chat-section w-100 h-100 container">
          <div className="row w-100 h-100">
            <div className="d-none d-md-block col-md-1 bg-danger"></div>
            <div className="col-md-11 bg-secondary"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="chat-header">
            <h1>
              <p>Hi, lmxai!</p>
              <p>How Can I Help You?</p>
            </h1>
          </div>
          <div className="chat-options container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col">
                <Image
                  src="/icons/actions/file/State=Default.svg"
                  height={24}
                  width={24}
                  alt="file-icon"
                />
                <p>Online Coding Classes For Beginners</p>
              </div>
              <div className="col">
                <Image
                  src="/icons/actions/file/State=Default.svg"
                  height={24}
                  width={24}
                  alt="file-icon"
                />
                <p>Look For History Of The Rubik&apos;s Cube</p>
              </div>
              <div className="col">
                <Image
                  src="/icons/actions/file/State=Default.svg"
                  height={24}
                  width={24}
                  alt="file-icon"
                />
                <p>Pros And Cons Of Artificial Intelligence</p>
              </div>
            </div>
          </div>
        </>
      )}
      <form className="chat-input">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Message..."
            name="message"
            onChange={(e)=>setInputValue(e.target.value)}
          />
          <button type="button" onClick={() => handleChat()}>
            <Image
              src="/icons/ui/dropdown/State=Default.svg"
              width={28}
              height={28}
              alt="arrow-icon"
            />
          </button>
        </div>
        <small>
          Lmxai may occasionally produce incorrect information. Please double
          check before using the information.
        </small>
      </form>
    </div>
  );
};

export default DashboardAIChatSection;
