import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center text-3xl font-bold items-center h-screen">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <Link to={"/"}>
          <button className="border rounded-xl py-2 px-3 bg-blue-400 text-white mt-7">
            Go back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
