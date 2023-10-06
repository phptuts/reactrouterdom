import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
export const personLoader = async ({ params, request }) => {
  const response = await fetch(`https://dog.ceo/api/breed/${params.id}/images`);
  if (response.status != 200) {
    throw new Response("Dog not found", {
      status: 500,
      statusText: "DogError",
      message: "Dog Not Found",
    });
  }
  const json = await response.json();
  return { imageUrl: json.message[0] };
};

const Person = () => {
  const { id } = useParams();
  const { imageUrl } = useLoaderData();
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
      <img src={imageUrl} alt="" />
    </>
  );
};

export default Person;
