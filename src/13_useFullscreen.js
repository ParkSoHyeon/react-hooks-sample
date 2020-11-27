import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useFullscreen = (callback) => {
    const element = useRef();

    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();

            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };

    const exitFull = () => {
        document.exitFullscreen();

        if (callback && typeof callback === "function") {
            callback(false);
        }
    };

    return { element, triggerFull, exitFull };
};

export default function App() {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="https://image.shutterstock.com/image-photo/magic-light-palm-600w-689228674.jpg" />
                <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
}
