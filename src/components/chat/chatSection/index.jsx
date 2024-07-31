"use client";
import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatOptions from "./ChatOptions";
import ChatInput from "./ChatInput";
import { getAuthHeaderById } from "@/helpers/auth";
import { chatMarker } from "@/helpers/chat/chatMarker";
import "./style.scss";

const ChatAIChatSection =({session}) => {
  const [chat, setChat] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatSessionId, setChatSessionId] = useState("")
  const [isChatContinue, setIsChatContinue] = useState(false)

  const REQ_API_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChat = async (inputValue) => {
    if (!inputValue) return;
    setLoading(true);
    setChat(true);

    const url = isChatContinue ? `${REQ_API_URL}/continue_session` : `${REQ_API_URL}/init_session`;
      const options = {
      method: "POST",
      headers: await getAuthHeaderById(chatSessionId),
      body: JSON.stringify({ question: inputValue }),
    };
    console.log(options);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!isChatContinue) {
          setIsChatContinue(true)
          setChatSessionId(data.session_id)
      }

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
