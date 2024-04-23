import "./App.css";
import JsxBasics from "./examples/1-jsx/JsxBasics";

import JsxAdvanced from "./examples/1-jsx/JsxAdvanced";
import OutputExampleParent from "./examples/2-data-flow/OutputExampleParent";
import PropsChildrenExample from "./examples/2-data-flow/PropsChildrenExample";
import PropsExample from "./examples/2-data-flow/PropsExample";

function App() {
  return (
    <div>
      {/* <JsxBasics />
      <JsxAdvanced /> */}

      <OutputExampleParent />
      <PropsChildrenExample />
      <PropsExample />
    </div>
  );
}

export default App;
