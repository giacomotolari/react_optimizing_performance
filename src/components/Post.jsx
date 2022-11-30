import { memo } from "react";
const Post = memo(({ title, children }) => {
  console.log(title);
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
});

export default Post;
