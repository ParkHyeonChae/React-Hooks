// usePreventLeave
// 새로고침, 창닫기 변경사항 저장 confirm

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    };

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
}


const App = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();

    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);