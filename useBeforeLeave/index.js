// useBeforeLeave
// 마우스가 페이지를 벗어날 때 실행

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useBeforeLeave = onBefore => {
    if(typeof onBefore !== "function") {
        return;
    }
    const handle = () => {
        const { clientY } = event;
        if (clientY <= 0) { // 마우스가 페이지 위로 벗어날 때
            onBefore();
        }
    }

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}


const App = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);