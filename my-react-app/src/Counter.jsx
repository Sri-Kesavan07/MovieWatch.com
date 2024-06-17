import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount((c) => c + 3);
  };
  let decrement = () => {
    setCount((c) => c - 1);
  };
  let reset = () => {
    setCount((c) => (c = 0));
  };
  return (
    <div className="container">
      <h3 className="countDisplay">{count}</h3>
      <button className="incBtn" onClick={increment}>
        Increase
      </button>
      <button className="resetBtn" onClick={reset}>
        Reset
      </button>
      <button className="decBtn" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
}
export default Counter;
