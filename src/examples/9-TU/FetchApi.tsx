import { useEffect, useState } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      {users.map((item) => (
        <div key={item.id}>
          <h3>ID : {item.id}</h3>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <hr />
        </div>
      ))}
      ;
    </>
  );
}

export default FetchApi;
