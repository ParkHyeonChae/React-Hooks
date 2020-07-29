// useNotification

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { node } from "prop-types";


const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permissoin => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};


const App = () => {
    const triggerNotif = useNotification("Hello", {
        body: "yes"
    });

    return (
        <div className="App">
            <button onClick={triggerNotif}Hello></button>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);