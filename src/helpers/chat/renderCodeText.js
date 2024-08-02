import DOMPurify from "dompurify";
import Image from "next/image";
import parse from "html-react-parser";
import React from "react";
import { handleCopyClick } from "./misc";

export const renderCodeText = (html, index, isCopied, copyClipboardSetter) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  const parsedHtml = parse(sanitizedHtml);

  const contentElements = [];

  React.Children.forEach(parsedHtml, (child, childIndex) => {
    if (child.type === "p") {
      contentElements.push(
        <p key={`text-${index}-${childIndex}`}>{child.props.children}</p>
      );
    }

    if (child.type === "pre" && child.props.children.type === "code") {
      const codeClassName = child.props.children.props.className;
      const codeContent = child.props.children.props.children;

      contentElements.push(
        <div key={`code-${index}-${childIndex}`} className="code-block">
          <pre>
            <code className={codeClassName}>{codeContent}</code>
          </pre>
          <div className="code-button-div">
            <div className="code-language">{codeClassName.slice(9)}</div>
            <button
              className="copy-button"
              onClick={() => handleCopyClick(codeContent, copyClipboardSetter)}
            >
              <Image
                src={
                  isCopied
                    ? "/icons/actions/copy/copied-icon.svg"
                    : "/icons/actions/copy/copy-icon.svg"
                }
                width={24}
                height={24}
                alt={isCopied ? "copied-icon" : "copy-icon"}
              />
              <span>Copy</span>
            </button>
          </div>
        </div>
      );
    }
  });
  return contentElements;
};
