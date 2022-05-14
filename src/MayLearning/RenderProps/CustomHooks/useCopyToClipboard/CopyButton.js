import React from "react";
import UseCopyToClipboard from "./UseCopyToClipboard"

const CopyButton = ({ code }) => {
    const [isCopied, handleCopy] = useCopyToClipboard();
    return (
        <button onClick={() => handleCopy(code)}>
            {/* {isCopied ? } */}
        </button>
    )
}