import { useLoaderData } from "react-router-dom";

export const contactLoader = () => {
  return { email: "blue@gmail.com" };
};

const Contact = () => {
  const { email } = useLoaderData();
  return (
    <>
      <h1>Contact Page</h1>
      <p>{email}</p>
    </>
  );
};

export default Contact;
