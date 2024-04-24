const ExampleWithoutState = () => {
  let title = "Title 1";

  const clickHandler = () => {
    title = "Title 2";
  };

  return (
    <div>
      <hr />
      <h1>Example Without State</h1>

      <h2>{title}</h2>

      <button onClick={clickHandler}>Change title</button>
    </div>
  );
};

export default ExampleWithoutState;
