import { useEffect, useState } from "react";

function UseEffectCounterExample() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("Number of clicks: " + counter);
  // });

  useEffect(() => {
    alert("Number of clicks: " + counter);

    return () => {
      alert("cleanup");
    };
  }, [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <hr />
      <h1>UseEffect Counter Example</h1>
      <p>{counter}</p>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseEffectCounterExample;
