import { useState } from "react";
import "./App.scss";
import Post from "./components/Post";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  console.log("app-render");
  return (
    <div className="App">
      <Post title="Post-1">
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptates asperiores amet eligendi laboriosam aspernatur impedit
            eos eum veritatis blanditiis aperiam dolore architecto, corrupti,
            maxime possimus dicta error, eaque similique!
          </p>

          <img
            src="https://images.unsplash.com/photo-1669717863955-b973d9ff9341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="post-img"
          />
        </>
      </Post>
      <Post title="Post-2" />
      <Post title="Post-3" />
      <h3>{counter}</h3>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
