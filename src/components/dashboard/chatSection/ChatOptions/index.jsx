import React from "react";
import Image from "next/image";

const ChatOptions = () => (
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
);

export default ChatOptions;
