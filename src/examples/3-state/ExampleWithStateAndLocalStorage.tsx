import { useState } from "react";

const ExampleWithStateAndLocalStorage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.clear("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <hr />
      <h1>Example With State And LocalStorage</h1>

      <h2>LoggedIn : {"" + isLoggedIn}</h2>

      <button onClick={loginHandler}>Log In</button>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default ExampleWithStateAndLocalStorage;
