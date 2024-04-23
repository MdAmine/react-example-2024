import svgImage from "../../assets/react.svg";

function JsxBasics() {
  const name = "Technomakers";

  const para = <p>paragraph</p>;

  let user = { id: 123, name: "Mohamed" };

  const user2 = {
    firstName: "Mohamed",
    lastName: "Amine",
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <div>
      <h1>JSX Basics</h1>

      <h2>Hello, {name}</h2>

      {para}

      <div id="name"></div>

      <div id={user.id}>{user.name}</div>

      <div className="test"></div>

      <br></br>
      <img src={svgImage} />

      <h2>Hello, {formatName(user2)}! </h2>
      {1 + 1}
    </div>
  );
}

export default JsxBasics;
