"use client";
import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatOptions from "./ChatOptions";
import ChatInput from "./ChatInput";
import { getAuthHeaderClient } from "@/helpers/auth";
import { chatMarker } from "@/helpers/chat/chatMarker";
import "./style.scss";

const ChatAIChatSection =({session}) => {
  const [chat, setChat] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("data", data);
      const sanitizedHtml = chatMarker(data)

      setApiData((prevData) => [...prevData, { ...data, sanitizedHtml }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container gap-4">
      {chat ? (
        <ChatMessages
          apiData={apiData}
          loading={loading}
        />
      ) : (
        <>
          <div className="chat-header">
            <h1>
              <p>Hi, {session?.user?.first_name}</p>
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
