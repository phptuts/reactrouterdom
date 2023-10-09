import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function onNav() {
    navigate("/about");
  }
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={onNav}>About</button>
    </>
  );
};

export default Home;
