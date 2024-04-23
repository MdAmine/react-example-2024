import PropsChildrenExampleChild from "./PropsChildrenExampleChild";

function PropsChildrenExample() {
  return (
    <div>
      <hr />
      <h1>Props Children Example</h1>
      <PropsChildrenExampleChild>test test</PropsChildrenExampleChild>

      <PropsChildrenExampleChild><p>para 1</p> <p>para 2</p></PropsChildrenExampleChild>

    </div>
  );
}

export default PropsChildrenExample;
