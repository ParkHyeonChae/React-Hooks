// React Hook useInput & validator

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "/styles.css";


const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    // console.log(event.target);
    const {
      target: { value }
    } = event;

    let willUpdate = true;

    if(typeof validator === "function") {
      willUpdate = validator(value);
    }

    if(willUpdate) {
      setValue(value)
    }
  };
  return { value, onChange };
};


const App = () => {
  const maxLen = (value) => value.length <= 10; // 길이 제한
  // const excludeAlpha = (value) => !value.includes("@"); // '@' 을 포함하면 true 리턴

  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
