import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number") {
        return;
    }

    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    return { ref: element, style: { opacity: 0 } };
};

export default function App() {
    const fadeInH1 = useFadeIn(1, 3);
    const fadeInP = useFadeIn(5, 10);

    return (
        <div className="App">
            {/* <h1 ref={el} style={{ opacity: 0 }}>
        Hello
      </h1> */}
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>blah blah...</p>
        </div>
    );
}
