import { useNavigate, useParams } from "react-router-dom";

const Page3 = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <h1>Page 3</h1>
      <h3>ID : {id}</h3>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Page3;
