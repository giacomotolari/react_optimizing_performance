import Post from "./components/Post";
import "./styles/App.scss";
import posts from "./data/posts.json";

function App() {
  return (
    <div className="App">
      <h1>The Bad Blog</h1>

      {posts.map((post) => {
        const { id, title, articleText } = post;
        if (id === "1") {
          return (
            <Post key={id} title={title} articleText={articleText}>
              <br />
              <hr />
              <hr />
              <div>
                <small>03.12.2022</small>
                <p>Mr.Hohnas</p>
              </div>
            </Post>
          );
        } else if (id === "2") {
          return (
            <Post key={id} title={title} articleText={articleText}>
              <br />
              <div>
                <small>03.12.2022</small>
                <p>Mr.Smith</p>
              </div>
            </Post>
          );
        } else {
          return <Post title={title} articleText={articleText} />;
        }
      })}
    </div>
  );
}

export default App;
