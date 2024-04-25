import { useState } from "react";
import Child11 from "./child11";
import Child21 from "./child21";
import ExampleContext from "./context/context";

const ContextExample = () => {
  const [varTest, setVarTest] = useState(1000);
  let myString = "azerty";

  const changeVarHandler = (newVar) => {
    setVarTest(newVar);
  };

  return (
    <>
      <ExampleContext.Provider
        value={{
          myVar: varTest,
          myString: myString,
        }}
      >
        <Child11 changeVar={changeVarHandler} />
        <Child21 />
      </ExampleContext.Provider>
    </>
  );
};
export default ContextExample;
