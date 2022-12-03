import React from "react";

function Post({ title, articleText, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <article>{articleText}</article>
      {children}
    </section>
  );
}

export default Post;
