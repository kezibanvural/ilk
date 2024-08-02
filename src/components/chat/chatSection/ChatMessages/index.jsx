import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import hljs from "highlight.js";
import DOMPurify from "dompurify";
import parse from 'html-react-parser';
import { renderCodeText } from "@/helpers/chat/renderCodeText";

const ChatMessages = ({ apiData, loading }) => {
  const [copyClipboard, setCopyClipboard] = useState(false);
  const chatSectionRef = useRef(null);

  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, [apiData, loading]);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [apiData, loading]);

  return (
    <div className="chat-section w-100 h-100 container" ref={chatSectionRef}>
      {apiData?.map((item, index) => (
        <div key={index} className="row w-100 mb-2 mb-md-2">
          <div className="col-0 col-md-1 d-none d-md-block">
            <Image
              src="/icons/ui/avatar/chat-section-avatar-icon.png"
              width={55}
              height={55}
              alt="user-avatar"
            />
          </div>
          <div className="col-11 col-md-10 answer-header p-0">
            <div className="mb-2">
              <span>{item?.question}</span>
              <Image
                src="/icons/ui/icons/State=Default,Name=Edit-chatSection.svg"
                width={24}
                height={24}
                alt="pencil"
              />
            </div>
            <div className="separator"></div>
          </div>
          <div className="col-0 col-md-1 d-none d-md-block"></div>
          <div className={`col-11 col-md-10 code-column code-column-${index}`}>
            {item.sanitizedHtml?.includes("code") ? (
              renderCodeText(item.sanitizedHtml, index, copyClipboard, setCopyClipboard)
            ) : (
              parse(DOMPurify.sanitize(item?.answer))
            )}
          </div>
        </div>
      ))}
      {loading && (
        <div className="row w-100 mb-5">
          <div className="col-0 col-md-1 d-none d-md-block">
            <Image
              src="/icons/ui/avatar/chat-section-avatar-icon.png"
              width={55}
              height={55}
              alt="user-avatar"
            />
          </div>
          <div className="col-12 col-md-10 answer-header">
            <div className="mb-2 placeholder-glow">
              <span className="placeholder col-5 rounded-3"></span>
              <Image
                src="/icons/ui/icons/State=Default,Name=Edit-chatSection.svg"
                width={24}
                height={24}
                alt="pencil"
              />
            </div>
            <div className="separator"></div>
          </div>
          <div className="col-0 col-md-1 d-none d-md-block placeholder-glow "></div>
          <div className="col-12 col-md-10 placeholder-glow">
            <span className="placeholder col-10 rounded-3"></span>
            <span className="placeholder col-10 rounded-3"></span>
            <span className="placeholder col-6 rounded-3"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
