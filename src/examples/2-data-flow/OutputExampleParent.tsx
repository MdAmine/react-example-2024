import OutputExampleChild from "./OutputExampleChild";

function OutputExampleParent() {
  function callback(message) {
    return <h3>message from child : {message}</h3>;
  }

  return (
    <>
      <hr />
      <h1>Output Example Parent</h1>
      <OutputExampleChild handleCallback={callback} />
    </>
  );
}

export default OutputExampleParent;
