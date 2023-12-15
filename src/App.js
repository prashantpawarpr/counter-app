import { useState } from "react";
import "./App.css";
import Button from "./Component/Button";

function App() {
  const [value, setValue] = useState(0);
  const [intervalId, setintervalId] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  //!In every state change condition the react will re-reder so the value will be reset

  const startBtnHandler = () => {
    clearInterval(intervalId);
    let intervalOneId = setInterval(
      () =>
        setValue((prevValue) => {
          if (prevValue > 0) {
            return prevValue + 1;
          } else {
            stopBtnHandler();
            return (prevValue = 0);
            console.log(intervalOneId);
          }
        }),
      1000
    );
    // console.log(intervalId);
    setintervalId(intervalOneId);
  };
  const stopBtnHandler = () => {
    clearInterval(intervalId);
  };
  const handleChange = (e) => {
    setInputValue(Number(e));
    console.log(e);
    setValue(Number(e));
  };

  return (
    <div className="App">
      <p>COUNTER APPLICATION</p>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <p>{value}</p>
      <Button
        style={{ backgroundColor: "red" }}
        btnHandler={startBtnHandler}
        btnText="Start"
      />
      <Button btnHandler={startBtnHandler} btnText="Count Down" />

      <Button btnHandler={stopBtnHandler} btnText="Stop" />
    </div>
  );
}

export default App;
