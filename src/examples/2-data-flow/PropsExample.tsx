import PropsExampleChild from "./PropsExampleChild";

function PropsExample() {
  return (
    <div>
      <hr />
      <h1>Props example</h1>
      <PropsExampleChild firstName="Mohamed" lastName="Amine" />
      <PropsExampleChild firstName="Zakaria" lastName="Zakaria" />
    </div>
  );
}

export default PropsExample;
