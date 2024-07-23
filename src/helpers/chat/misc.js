export const handleCopyClick = (codeText, copyClipboardSetter) => {
    navigator.clipboard.writeText(codeText.trim()).then(
      () => {
        copyClipboardSetter(true);
        setTimeout(() => copyClipboardSetter(false), 2000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };
