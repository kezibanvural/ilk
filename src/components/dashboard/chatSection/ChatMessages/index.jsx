import React, { useEffect, useRef } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import { marked } from "marked";

const ChatMessages = ({ apiData, loading, copyClipboard, handleCopyClick }) => {
  const chatSectionRef = useRef(null);

  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, [apiData, loading]);

  const renderCodeBlock = (html, index) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const codeBlocks = Array.from(
      div.querySelectorAll("pre code[class^='language-']")
    );
    const textBlocks = Array.from(div.querySelectorAll("p"));
    
    const elements = [];
    textBlocks.forEach((textBlock, idx) => {
      elements.push(
        <p key={`text-${index}-${idx}`} dangerouslySetInnerHTML={{ __html: textBlock.innerHTML }}></p>
      );

      if (codeBlocks[idx]) {
        const codeText = codeBlocks[idx].innerText;
        elements.push(
          <div key={`code-${index}-${idx}`} className="code-block">
            
            <pre>
              <code dangerouslySetInnerHTML={{ __html: codeBlocks[idx].innerHTML }} />
            </pre>
            <div className="code-button-div">
            <div className="code-language">
              {codeBlocks[0].className.slice(9)}
            </div>
              <button
                className="copy-button"
                onClick={() => handleCopyClick(codeText)}
              >
                <Image
                  src={
                    copyClipboard
                      ? "/icons/actions/copy/copied-icon.svg"
                      : "/icons/actions/copy/copy-icon.svg"
                  }
                  width={24}
                  height={24}
                  alt={copyClipboard ? "copied-icon" : "copy-icon"}
                />
                <span>Copy</span>
              </button>
            </div>
          </div>
        );
      }
    });

    return elements;
  };

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
          <div className="col-11 col-md-10 answer-header">
            <div className="mb-2">
              <span>{item?.answer?.query}</span>
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
              renderCodeBlock(item.sanitizedHtml, index)
            ) : (
              <span dangerouslySetInnerHTML={{ __html: item?.answer?.result }}></span>
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
