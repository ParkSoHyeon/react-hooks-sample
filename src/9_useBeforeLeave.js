import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }

    const handle = () => {
        const { clientY } = event;

        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

export default function App() {
    const begForLife = () => console.log("Pls dont leave...");
    useBeforeLeave(begForLife);
    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}
