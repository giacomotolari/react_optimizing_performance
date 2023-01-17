import { useMemo, useState, useCallback } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [text, setTest] = useState("text");

  const getSum = useCallback(
    (num) => {
      console.log("getSum");
      return counter1 + 10 + num;
    },
    [counter1]
  );

  const getText = useMemo(() => {
    console.log("getText");
    return `${counter2} + 10`;
  }, [counter2]);

  const setTextState = useCallback(() => {
    console.log("setTextState");
    return setTest(`${text} ${counter2}`);
  }, [counter2, text]);

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
      <p>text: {getText}</p>
      <button onClick={setTextState}>set textState</button>
      <br />
      <p>text - state: {text}</p>
    </div>
  );
};

export default App;
