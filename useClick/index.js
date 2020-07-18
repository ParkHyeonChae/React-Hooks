import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const useClick = onClick => {
    if(typeof onClick !== "function") {
        return;
    }

    const element = useRef();

    useEffect(() => {
        if(element.current) {  // useEffect가 mount됬을때 이부분을 call
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    // [] dependency를 없애면 매번 update될때마다 addEventListener call
    // return 위의 문장은 [] dependency가 있어야만 componentDidMount 때 단 한번 실행
    // return 밑의 문장은 [] dependency가 있을떄 componentWillUnMount 때 호출 ->
    // component가 mount되지 않았을때 eventListerner가 배치되지 않게 하도록
    
    return element;
}


const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);

    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);