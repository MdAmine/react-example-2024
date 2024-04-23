function OutputExampleChild(props) {
  let message = "Hello from child";

  return <span>{props.handleCallback(message)}!</span>;
}

export default OutputExampleChild;
