import { useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const getSum = (num) => {
    console.log("getSum");
    return counter1 + 10 + num;
  };

  const getText = () => {
    console.log("getText");
    return `${counter2} + 10`;
  };

  return (
    <div>
      <button onClick={() => setCounter1((prev) => prev + 1)}>Counter 1</button>
      <br />
      <p>counter 1: {counter1}</p>
      <br />
      <button onClick={() => setCounter2((prev) => prev + 1)}>Counter 2</button>
      <br />
      <p>counter 2: {counter2}</p>
      <br />
      <p>sum: {getSum(7)}</p>
      <br />
      <p>text: {getText()}</p>
    </div>
  );
};

export default App;
