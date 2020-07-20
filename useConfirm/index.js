// useConfirm 확인 alert창
// ex) alert창 확인, 취소 후 function 걸 때

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useConfirm = (message = "", onConfirm, onCancel) => {

    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(onCancel && typeof onCancel !== "function") {
        return;
    }

    const confirmAction = () => {
        if(confirm(message)) {
            onConfirm(); // 2. true라고 하면 onConfirm 실행
        } else {
            onCancel(); // 3. false면 onCancel 실행
        }
    }

    return confirmAction
};


const App = () => {

    const confirmButton = () => console.log("Deleting..."); // 4. true면 onConfirm Callback이 와서 이거 실행
    const cancelButton = () => console.log("Cancel...")
    const confirmDelete = useConfirm("Are you sure Delete?", confirmButton, cancelButton); // 1. button을 누른순간 useConfirm의 confirmAction

    return (
        <div className="App">
            <button onClick={confirmDelete}>DeleteButton</button>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);