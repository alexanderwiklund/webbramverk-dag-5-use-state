import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addTwo = () => {
    setCounter((previousValue) => {
      return previousValue + 1;
    });
    setCounter((previousValue) => {
      return previousValue + 1;
    });
  };
  const subtractOne = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <button onClick={subtractOne}>-</button>
      <span>{counter}</span>
      <button onClick={addTwo}>+</button>
    </div>
  );
}

export default App;
