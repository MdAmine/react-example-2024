import { useState } from "react";

const ExampleWithState = () => {
  const [title, setTitle] = useState("Title 1");

  const clickHandler = () => {
    setTitle("Title 2");
  };

  return (
    <div>
      <hr />
      <h1>Example With State</h1>

      <h2>{title}</h2>

      <button onClick={clickHandler}>Change title</button>
    </div>
  );
};

export default ExampleWithState;
