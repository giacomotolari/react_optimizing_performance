function Post({ title, articleText, children }) {
  console.log("title:", title);
  return (
    <section>
      <h2>{title}</h2>
      <article>{articleText}</article>
      {children}
    </section>
  );
}

export default Post;
