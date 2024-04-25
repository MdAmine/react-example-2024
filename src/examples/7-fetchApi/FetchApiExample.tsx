import { useEffect, useState } from "react";

const FetchApiExample = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepoInfos();
  }, []);

  // function fetchRepoInfos() {
  //   fetch("https://reqres.in/api/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data.data);
  //     });
  // }

  async function fetchRepoInfos() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://reqres.in/api/users");

      if (!response.ok) throw Error("Error..");

      const data = await response.json();

      setUsers(data.data);
    } catch (error) {
      setError("Error");
    }

    setIsLoading(false);
  }

  let content = <p>Loading...</p>;

  if (error) content = <p>Error!</p>;

  if (!isLoading && users.length > 0) {
    content = users.map((item) => (
      <div key={item.id}>
        <h3>ID : {item.id}</h3>
        <h4>{item.first_name + " " + item.last_name}</h4>
        <h4>{item.email}</h4>
        <hr />
      </div>
    ));
  }

  return <>{content}</>;
};
export default FetchApiExample;
