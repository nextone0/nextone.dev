import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styles from "./CodeBlock.module.css";

const CodeBlock = ({ children, className }) => {
  const [copyText, setCopyText] = useState("Kopyala");

  const language = className.replace(/language-/, "");

  function copyToClipboard(e) {
    navigator.clipboard.writeText(e.target.parentNode.firstChild.innerText);
    setCopyText("Kopyalandı");

    setTimeout(() => {
      setCopyText("Kopyala");
    }, 1000);
  }

  return (
    <div className={styles.code}>
      <SyntaxHighlighter style={atomDark} language={language}>
        {children}
      </SyntaxHighlighter>
      <span onClick={(e) => copyToClipboard(e)} className={styles.copyBtn}>
        {copyText}
      </span>
    </div>
  );
};

export default CodeBlock;
