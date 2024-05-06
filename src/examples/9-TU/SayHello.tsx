import { useState } from "react";

function SayHello() {
  const [textEdited, setTextEdited] = useState(false);

  const editTextHandler = () => {
    setTextEdited(true);
  };

  return (
    <>
      <h2>Say Hello</h2>
      {!textEdited && <p>Hello World</p>}
      {textEdited && <p>Hello Technomakers</p>}
      <button onClick={editTextHandler}>Edit text</button>
    </>
  );
}

export default SayHello;
