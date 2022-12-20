import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog details- {id}</h2>
    </div>
  );
};

export default Blog;