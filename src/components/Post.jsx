import { memo } from "react";
const Post = memo(({ title }) => {
  console.log(title);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
});

export default Post;
