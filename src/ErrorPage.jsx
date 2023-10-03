import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error, "error");
  if (error.status == 500) {
    return <h1>Server Error</h1>;
  }
  return <h1>Error Page</h1>;
};

export default ErrorPage;
