import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


const App = () => {
  const sayHello = () => console.log("hello");

  // useEffect(() => {
  //   sayHello();
  // });
  
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  
  useEffect(sayHello, [number]); // [] 안의 디펜던시의 상태가 변할때마다 동작, mount 된 직후만 동작하려면 [] 빈 디펜던시입력
  // useEffect는 변화를 감시
  // ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number - 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);