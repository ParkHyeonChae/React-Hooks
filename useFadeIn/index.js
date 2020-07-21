// useFadeIn
// CSS Animation을 hooks에 포함시키는 법

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
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


const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 7);

    return (
        <div className="App">
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>example example</p>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);