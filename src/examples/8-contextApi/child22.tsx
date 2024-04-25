import { useContext } from "react";
import ExampleContext from "./context/context";

const Child22 = () => {
  let ctx = useContext(ExampleContext);

  return <>{ctx.myVar + " " + ctx.myString}</>;
};
export default Child22;
