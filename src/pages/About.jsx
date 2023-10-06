import { useLoaderData } from "react-router-dom";

export const aboutLoader = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (response.status != 200) {
    throw new Response("Dog not found", {
      status: 500,
      statusText: "DogError",
      message: "Dog Not Found",
    });
  }
  const json = await response.json();
  return { imageUrl: json.message };
};

const About = () => {
  const { imageUrl } = useLoaderData();
  console.log("About component");
  return (
    <>
      <h1>About Page</h1>
      <img src={imageUrl} alt="" />
    </>
  );
};

export default About;
