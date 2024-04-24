import { useRef } from "react";

const UncontrolledFormAndUseRef = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <>
      <hr />
      <h1>Uncontrolled Form And useRef Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" ref={inputRef} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
export default UncontrolledFormAndUseRef;
