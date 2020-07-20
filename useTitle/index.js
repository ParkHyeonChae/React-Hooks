// useTitle
// ex) html 타이틀 Loading 표시, 타이틀에 로딩스피너같은 효과 줄 때

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);

    return setTitle;
}

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);

    return (
        <div className="App">
            <div>Hi</div>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);