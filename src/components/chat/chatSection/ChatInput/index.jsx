import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Dropdown from "../../common/dropdown";
import FileUploadList from "../fileUploadList";

const ChatInput = ({ onSendMessage, loading }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    autoHeight(e.target);
  };

  const autoHeight = (elem) => {
    elem.style.height = "1px";
    elem.style.height = `${elem.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      autoHeight(textareaRef.current);
    }
  }, [inputValue]);

  return (
    <>
    
    <form
      className="chat-input"
      onSubmit={(e) => {
        e.preventDefault();
        onSendMessage(inputValue);
        setInputValue("");
      }}
    >
        <FileUploadList files={files} isLoading={isLoading} setFiles={setFiles} />
      <div className="textarea-container">
        <Dropdown files={files} setFiles={setFiles} isLoading={isLoading} setIsLoading={setIsLoading} />
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
    </>
  );
};

export default ChatInput;
