import "./App.css";
import JsxBasics from "./examples/1-jsx/JsxBasics";

import JsxAdvanced from "./examples/1-jsx/JsxAdvanced";
import OutputExampleParent from "./examples/2-data-flow/OutputExampleParent";
import PropsChildrenExample from "./examples/2-data-flow/PropsChildrenExample";
import PropsExample from "./examples/2-data-flow/PropsExample";
import ExampleWithoutState from "./examples/3-state/ExampleWithoutState";
import ExampleWithState from "./examples/3-state/ExampleWithState";
import ExampleWithStateAndLocalStorage from "./examples/3-state/ExampleWithStateAndLocalStorage";
import UseEffectCounterExample from "./examples/4-useEffect/UseEffectCounterExample";
import ControlledForm from "./examples/5-form/ControlledForm";
import UncontrolledFormAndUseRef from "./examples/5-form/UncontrolledFormAndUseRef";
import ControlledFormWithTwoInputs from "./examples/5-form/ControlledFormWithTwoInputs";
import RoutingExample from "./examples/6-routing/RoutingExample";

function App() {
  return (
    <div>
      {/* <JsxBasics />
      <JsxAdvanced /> */}

      {/* <OutputExampleParent />
      <PropsChildrenExample />
      <PropsExample /> */}

      {/* <ExampleWithoutState />
      <ExampleWithState />
      <ExampleWithStateAndLocalStorage /> */}

      {/* <UseEffectCounterExample /> */}

      {/* <ControlledForm />
      <UncontrolledFormAndUseRef />
      <ControlledFormWithTwoInputs /> */}

      <RoutingExample />
    </div>
  );
}

export default App;
