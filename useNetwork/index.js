// useNetwork
// navigator online or offline 방지

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.online);
    const handleChange = () => {
        if (typeof onchange === "function") {
          onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        () => {
          window.removeEventListener("online", handleChange);
          window.removeEventListener("offline", handleChange);
        };
    }, []);

    return status;
};


const App = () => {
    const handleNetworkChange = online => {
      console.log(online ? "We just went online" : "we are offline")
    };
    const onLine = useNetwork(handleNetworkChange);

    return (
        <div className="App">
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);