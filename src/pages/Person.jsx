import { useParams, useSearchParams } from "react-router-dom";

const Person = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  function changeRed() {
    setSearchParams((prev) => {
      prev.set("red", Math.random());
      return prev;
    });
  }
  return (
    <>
      <h1>Person</h1>
      <h2>id: {id}</h2>
      <h2>Red Query Param: {searchParams.get("red")}</h2>
      <button onClick={changeRed}>Change Red</button>
    </>
  );
};

export default Person;
