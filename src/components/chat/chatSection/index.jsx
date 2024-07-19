"use client";
import React, { useState } from "react";
import "./style.scss";
import { marked } from "marked";
import DOMPurify from "dompurify";
import ChatMessages from "./ChatMessages";
import ChatOptions from "./ChatOptions";
import ChatInput from "./ChatInput";
import { getAuthHeaderClient } from "@/helpers/auth";

const ChatAIChatSection =({session}) => {
  const [chat, setChat] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyClipboard, setCopyClipboard] = useState(false);

  const handleChat = async (inputValue) => {
    if (!inputValue) return;
    setLoading(true);
    setChat(true);

    const url =  "https://api.dev.lkai.app/ask";
    const options = {
      method: "POST",
      headers: await getAuthHeaderClient(),
      body: JSON.stringify({ question: inputValue }),
    };
    console.log("/*/*/*/*/*",options);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("data", data);
      const sanitizedHtml = DOMPurify.sanitize(
        marked(data?.answer || "")
      );

      setApiData((prevData) => [...prevData, { ...data, sanitizedHtml }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyClick = (codeText) => {
    navigator.clipboard.writeText(codeText.trim()).then(
      () => {
        setCopyClipboard(true);
        setTimeout(() => setCopyClipboard(false), 2000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div className="chat-container gap-4">
      {chat ? (
        <ChatMessages
          apiData={apiData}
          loading={loading}
          copyClipboard={copyClipboard}
          handleCopyClick={handleCopyClick}
        />
      ) : (
        <>
          <div className="chat-header">
            <h1>
              <p>Hi, {session?.user?.first_name} {session?.user?.last_name}</p>
              <p>How Can I Help You?</p>
            </h1>
          </div>
          <ChatOptions />
        </>
      )}
      <ChatInput onSendMessage={handleChat} loading={loading} />
    </div>
  );
};

export default ChatAIChatSection;
