// useRef InputFocus example.
// ex) 입력창에 포커스주거나 이벤트 줄 때, 제한 줄 때

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const App = () => {
    const inputFocus = useRef();
    setTimeout(() => inputFocus.current.focus(), 5000); // 5초뒤 input Focus

    return (
        <div className="App">
            <div>Hi</div>
            <input ref={inputFocus} placeholder="Input here..." />
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);