import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        404
        <br />
        Not Found Page
      </p>
      <Link to="/">Go to the Home Page</Link>
    </>
  );
};

export default NotFound;
