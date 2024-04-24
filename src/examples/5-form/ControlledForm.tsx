import { useState } from "react";

const ControlledForm = () => {
  const [firstName, setFname] = useState("");

  const handleChange = (e) => {
    setFname(e.target.value);
  };

  const convertToUpperCase = (text) => {
    return text.toUpperCase();
  };

  return (
    <>
      <hr />
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name:{" "}
          <input type="text" value={firstName} onChange={handleChange} />
        </label>
      </form>
      <h5>First name: {firstName}</h5>
      <h5>First name: {convertToUpperCase(firstName)}</h5>
    </>
  );
};
export default ControlledForm;
