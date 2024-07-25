import DOMPurify from "dompurify";
import { marked } from "marked";

export const chatMarker = (text) => {

    const sanitizedHtml = DOMPurify.sanitize(
        marked(text?.answer || "")
      );
    console.log("chatMarker",sanitizedHtml);
    return sanitizedHtml
}