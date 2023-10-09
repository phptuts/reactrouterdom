import { useLoaderData, Form, useActionData, redirect } from "react-router-dom";

export const contactLoader = () => {
  return { email: "blue@gmail.com" };
};

/**
 *
 * @param {{ params: Object, request : Request }} param0
 */
export const contactAction = async ({ params, request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const color = formData.get("colors");
  const colors = formData.getAll("colors");
  const formObject = Object.fromEntries(formData.entries());
  formObject.colors = colors;
  console.log({ formObject, color, colors, email });

  // return redirect("/");

  return { success: true };
};

const Contact = () => {
  const { email } = useLoaderData();
  const data = useActionData();

  if (data?.success) {
    return <h1>Submitted</h1>;
  }

  return (
    <>
      <h1>Contact Page</h1>
      <p>{email}</p>
      <Form method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input type="text" name="message" id="message" />
        </div>
        <div>
          <input type="checkbox" name="colors" value="red" /> Red
        </div>
        <div>
          <input type="checkbox" name="colors" value="green" /> Green
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default Contact;
