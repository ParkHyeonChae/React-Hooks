// useAxios

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";
import "./styles.css";


const App = () => {
    const { loading, data, error, refetch } = useAxois ({
        url: "https://yts.am/api/v2/list_movie.json"
    });

    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);