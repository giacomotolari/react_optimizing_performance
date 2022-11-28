import { useState } from "react";
import "./App.scss";
import Post from "./components/Post";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  return (
    <div className="App">
      <Post title="Post-1" />
      <Post title="Post-2" />
      <Post title="Post-3" />
      <h3>{counter}</h3>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
