import { useState } from "react";

const ControlledFormWithTwoInputs = () => {
  const [myForm, setMyForm] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setMyForm({
      ...myForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={myForm.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={myForm.lastName}
            onChange={handleChange}
          />
        </label>
      </form>
      <h5>
        Name: {myForm.firstName} {myForm.lastName}
      </h5>
    </>
  );
};

export default ControlledFormWithTwoInputs;
