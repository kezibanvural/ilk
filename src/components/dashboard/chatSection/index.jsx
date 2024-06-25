"use client";
import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import Image from "next/image";
import { marked } from "marked";
import DOMPurify from "dompurify";
import AttachmentFile from "../common/attach-file";

const DashboardAIChatSection = () => {
  const [chat, setChat] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyClipboard, setCopyClipboard] = useState(false);
  const chatSectionRef = useRef(null);
  const textareaRef = useRef(null);

  const handleChat = async () => {
    if (!inputValue) return;
    setLoading(true);
    setChat(true);

    const url = `https://5000-01hw0ajtd083fjct2wwgvbjt3g.cloudspaces.litng.ai/ask`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: inputValue }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const sanitizedHtml = DOMPurify.sanitize(
        marked(data?.answer?.result || "")
      );
      setApiData((prevData) => [...prevData, { ...data, sanitizedHtml }]);
      setInputValue("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, [apiData, loading]);

  const autoHeight = (elem) => {
    elem.style.height = "1px";
    elem.style.height = `${elem.scrollHeight}px`;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    autoHeight(e.target);
  };

  console.log(apiData);

  useEffect(() => {
    if (textareaRef.current) {
      autoHeight(textareaRef.current);
    }
  }, [inputValue]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
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
                <img
                  src={
                    copyClipboard
                      ? "/icons/actions/copy/copied-icon.svg"
                      : "/icons/actions/copy/copy-icon.svg"
                  }
                  width="24"
                  height="24"
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
    <div className="chat-container gap-4">
      {chat ? (
        <div
          className="chat-section w-100 h-100 container"
          ref={chatSectionRef}
        >
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
              <div
                className={`col-11 col-md-10 code-column code-column-${index}`}
              >
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
                  src="/icons/actions/file/State=Default-chatSection.svg"
                  height={24}
                  width={24}
                  alt="file-icon"
                />
                <p>Online Coding Classes For Beginners</p>
              </div>
              <div className="col">
                <Image
                  src="/icons/actions/file/State=Default-chatSection.svg"
                  height={24}
                  width={24}
                  alt="file-icon"
                />
                <p>Look For History Of The Rubik&apos;s Cube</p>
              </div>
              <div className="col">
                <Image
                  src="/icons/actions/file/State=Default-chatSection.svg"
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
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          handleChat();
        }}
      >
        <div className="textarea-container">
          <AttachmentFile />
          <textarea
            ref={textareaRef}
            style={{ overflow: "hidden" }}
            rows={1}
            className="form-control text-input"
            data-text="Message"
            placeholder="Message"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {loading ? (
            <button type="button" className="submit-btn">
              <Image
                src="/icons/actions/arrow/pause.svg"
                width={28}
                height={28}
                alt="arrow-icon"
              />
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              <Image
                src="/icons/ui/dropdown/State=Default.svg"
                width={28}
                height={28}
                alt="arrow-icon"
              />
            </button>
          )}
        </div>
        <small>
          Lmxai may occasionally produce incorrect information. Please
          double-check before using the information.
        </small>
      </form>
    </div>
  );
};

export default DashboardAIChatSection;
