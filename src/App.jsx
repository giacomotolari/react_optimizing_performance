import Post from "./components/Post";
import "./styles/App.scss";
import { useState, memo } from "react";

function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);

  const setMode = () => setIsDarkMode(isdarkMode ? false : true);
  console.log("app-render");

  const article1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetu ea quibusdam minus placeat consequuntur velit dicta, reprehenderit fuga iste blanditiis, consequatur molestias eos explicabo, praesentiumveritatis officia voluptate doloremque cupiditate! Culpa accusamusnecessitatibus asperiores iusto. Illum, eum soluta. Porro, essedolores, voluptatum modi omnis dicta minus ab consectetur totam assumenda ipsam. At expedita, ducimus veniam harum eum in sapiente.Laborum.";
  const article2 =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aliquid sapiente accusantium id et veniam, sequi explicabo quas, consequatur assumenda tenetur deleniti excepturi maxime fugiat  adipisci odit error amet in. ";

  const article3 =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit amet odit excepturi esse corporis inventore id aperiam ducimus consequuntur. Iste perferendis nemo, repudiandae id cum hic magni accusamus ipsa! Qui maiores perspiciatis quisquam explicabo nostrum, pariatur eveniet, tenetur sed placeat unde, exercitationem culpa hic distinctio obcaecati ad corrupti nam mollitia rerum ab! Tempora nesciunt odit quos neque ducimus delectus.";

  return (
    <div className={`App ${isdarkMode && "darkMode"}`}>
      <h1>The Bad Blog</h1>
      <button onClick={setMode}>
        {isdarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Post title="Post 1" articleText={article1}>
        <br />
        <hr />
        <hr />
        <div>
          <small>03.12.2022</small>
          <p>Mr.Hohnas</p>
        </div>
      </Post>

      <Post title="Post 2" articleText={article2}>
        <br />
        <div>
          <small>03.12.2022</small>
          <p>Mr.Smith</p>
        </div>
      </Post>

      <Post title="Post 3" articleText={article3} />
      {/* change title-state to test React.memo */}
      {/* <Post
        title={`Post 3 ${isdarkMode ? "Light Mode" : "Dark Mode"}`}
        articleText={article3}
      /> */}
    </div>
  );
}

export default App;
