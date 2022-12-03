import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <p>
        <Link to="/blogs/1">Blog 1</Link>
        <br />
        <Link to="/blogs/2">Blog 2</Link>
      </p>
    </div>
  );
};

export default BlogPage;
