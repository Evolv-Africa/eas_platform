import { useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    // toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const pasteFromClipboard = () => {
    navigator.clipboard.readText();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const blockClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  return { copyToClipboard, copied, pasteFromClipboard, blockClipboard };
};
